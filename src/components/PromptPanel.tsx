import React from "react";

type PrompPanelProps = {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  objectives: [string];
  examples: [{ output: string; input: string; explanation?: string }];
};

function promptPanel(props: PrompPanelProps) {
  const getDifficultyColor = (
    difficulty: "Easy" | "Medium" | "Hard"
  ): string => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600";
      case "Medium":
        return "text-yellow-600";
      case "Hard":
        return "text-red-600";
      default:
        return "text-grey-600";
    }
  };

  return (
    <div className="w-full px-6 py-12 md:w-1/3">
      <h2 className="text-2xl font-bold ">
        {props.id}. {props.title}{" "}
        <span className={getDifficultyColor(props.difficulty)}>
          ({props.difficulty})
        </span>
      </h2>

      <br />
      <h4 className="font-bold">Objective:</h4>
      {props.objectives.map((objective, index) => (
        <div key={index}>
          <div className="text-sm">{objective}</div>
          <br />
        </div>
      ))}

      {props.examples.map((example, index) => (
        <div key={index}>
          <h4 className="font-bold">Example {index + 1}</h4>
          <p className="text-sm">
            <strong>Input: </strong>
            {example.input}
          </p>

          <p className="text-sm">
            <strong>Output: </strong>
            {example.output}
          </p>

          {Object.hasOwn(example, "explanation") && (
            <p className="text-sm">
              <strong>Explanation: </strong>
              {example.explanation}
            </p>
          )}
          <br />
        </div>
      ))}
    </div>
  );
}

export default promptPanel;
