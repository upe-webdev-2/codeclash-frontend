import CustomEditor from "@/templates/Playground/CustomEditor";
import GameInfo from "@/templates/Playground/GameInfo";
import Tabs from "@/templates/Playground/Tabs";
import Description from "@/templates/Playground/Tabs/Description";
import Result from "@/templates/Playground/Tabs/Result";
import { useEffect, useRef, useState } from "react";

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
  onSubmitCode: (code: string) => void;
  onTestCode: (code: string) => void;
  testCases?: {};
};

const Playground = ({ problem, onSubmitCode, onTestCode }: Playground) => {
  const editorRef = useRef(null); // monaco editor
  const [tabManager, setTabManager] = useState(0); // instructions - results - (past submissions)?

  /**
   * to start the countdown, set timer to problems.timeLimit
   * To stop the countdown, set timer to null or 0,
   */

  // Development
  const [timer, setTimer] = useState<number>(null);
  // Production
  //   const [timer, setTimer] = useState<number>(problem.timeLimit);


  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }

    if (timer === 0) {
      alert("Time limit exceeded!");
    }
  }, [timer]);

  const [testCases, setTestCases] = useState(null);
  const [completedAllTestCases, setCompletedAllTestCases] = useState(false); // from the sockets if the user was able to do all the test cases

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
            onClick={() => onTestCode(editorRef.current?.getValue())}
          >
            Test
          </button>
          <button
            onClick={() => onSubmitCode(editorRef.current?.getValue())}
            className="w-full transition-all duration-1000 active:translate-y-1 bg-gradient-to-r from-tertiary via-secondary to-tertiary bg-size-200 bg-pos-0 hover:bg-pos-100"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playground