import Tabs from "@/templates/Playground/Tabs";
import CustomEditor from "@/templates/Playground/CustomEditor";
import Description from "@/templates/Playground/Tabs/Description";
import GameInfo from "@/templates/Playground/GameInfo";
import { GetServerSideProps } from "next";
import { useEffect, useRef, useState } from "react";
import { getSession } from "next-auth/react";
import Result from "@/templates/Playground/Tabs/Result";

type Playground = {
  problem: {
    id: number;
    title: string;
    difficulty: "Easy" | "Medium" | "Hard";
    objectives: string[];
    examples: {
      output: string;
      input: string;
      explanation?: string;
    }[];
    starterCode: string;
    timeLimit: number;
  };
};

const Dom = ({ problem }: Playground) => {
  const editorRef = useRef(null); // monaco editor
  const [tabManager, setTabManager] = useState(0); // instructions - results - (past submissions)?

  /**
   * to start the countdown, set timer to problems.timeLimit
   * To stop the countdown, set timer to null or 0,
   */
  const [timer, setTimer] = useState<number>(problem.timeLimit);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else if (timer === 0) {
      setTimer(null);
    }

    if (timer === null) {
      alert("Time limit exceeded!");
    }
  }, [timer]);

  const [testCases, setTestCases] = useState(null);
  const [completedAllTestCases, setCompletedAllTestCases] = useState(false); // from the sockets if the user was able to do all the test cases

  const handleSubmit = () => {
    /**
     * TODO: send code to sockets for validation
     */
    alert("Submit: \n\n\n" + editorRef.current.getValue());
  };

  const handleTest = () => {
    /**
     * TODO: Send code to sockets for test cases
     * * editorRef.current.getValue()
     */
    setTabManager(1); // show the results tab
    setTestCases([
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0]",
        expected: "[0,1]",
        Stdout: "{}"
      },
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[]",
        expected: "[0,1]"
      },
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        expected: "[0,1]"
      },
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        expected: "[0,1]",
        Stdout: "[2,7,11,15]"
      }
    ]);
    setCompletedAllTestCases(false);
  };

  return (
    <div className="flex">
      <div className="w-[33vw]">
        <Tabs
          tabs={[
            {
              name: "Description",
              element: <Description {...problem} />
            },
            {
              name: "Result",
              element: (
                <Result testCases={testCases} passed={completedAllTestCases} />
              )
            }
          ]}
          activeTab={tabManager}
          switchTab={tab => setTabManager(tab)}
        />
      </div>

      <div className="pr-10 w-[67vw]">
        <div className="h-32">
          <GameInfo
            opponent={{
              username: "ROXXY345",
              profilePicture: "/static/placeholder.jpeg",
              achievements: 12
            }}
            testCases={{
              total: 10,
              opponentCompletion: 8,
              userCompletion: 6
            }}
            timer={{
              timeRemaining: timer || problem.timeLimit,
              timeLimit: problem.timeLimit
            }}
          />
        </div>

        <div className="h-[65vh]">
          <CustomEditor
            editorConfig={{
              defaultValue: problem.starterCode,
              language: "python"
            }}
            editorRef={editorRef}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mt-2 [&>*]:p-2 [&>*]:rounded-lg font-gilroy-bold">
          <button
            className="w-full transition duration-1000 polymorphism active:translate-y-1 hover:bg-tertiary"
            onClick={handleTest}
          >
            Test
          </button>
          <button
            onClick={handleSubmit}
            className="w-full transition-all duration-1000 active:translate-y-1 bg-gradient-to-r from-tertiary via-secondary to-tertiary bg-size-200 bg-pos-0 hover:bg-pos-100"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Playground(props: Playground) {
  return (
    <>
      <Dom {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    };
  }

  const response = await fetch(
    `${process.env.API_ENDPOINT}/problems/${context.query.problem}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      problem: data
    }
  };
};
