import Tabs from "@/components/Tabs";
import Instruction from "@/templates/Playground/Instructions";
import { GetServerSideProps } from "next";

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
      <div className="w-[67vw]"></div>
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
