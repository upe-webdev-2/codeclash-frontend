import Tabs from "@/templates/Playground/Tabs";
import CustomEditor from "@/templates/Playground/CustomEditor";
import Instruction from "@/templates/Playground/Instructions";
import GameInfo from "@/templates/Playground/GameInfo";
import { GetServerSideProps } from "next";
import { useEffect, useRef } from "react";

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

        <div>Controls</div>
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
