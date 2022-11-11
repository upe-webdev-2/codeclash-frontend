import Tabs from "@/templates/Playground/Tabs";
import CustomEditor from "@/templates/Playground/CustomEditor";
import Instruction from "@/templates/Playground/Instructions";
import GameInfo from "@/templates/Playground/GameInfo";
import { GetServerSideProps } from "next";
import { useRef, useState } from "react";

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
  const editorRef = useRef(null);
  const [promptPanelTab, setPromptPanelTab] = useState(0);

  const handleSubmit = () => {
    /**
     * TODO: send code to sockets for validation
     */
    alert("Submit: \n\n\n" + editorRef.current.getValue());
  };

  const handleTest = () => {
    /**
     * TODO: Send code to sockets for test cases
     */
    setPromptPanelTab(1);
    alert("Testing: \n\n\n" + editorRef.current.getValue());
  };

  return (
    <div className="flex">
      <div className="w-[33vw]">
        <Tabs
          tabs={[
            {
              name: "instruction",
              element: <Instruction {...problem} />
            },
            {
              name: "output",
              element: <h1>This will one day be the output tab</h1>
            }
          ]}
          activeTab={promptPanelTab}
          switchTab={tab => setPromptPanelTab(tab)}
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { problem } = query;

  const response = await fetch(`${process.env.ENDPOINT}/problems/${problem}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

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
