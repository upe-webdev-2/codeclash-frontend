import React from "react";

type PrompPanelProps = {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  objectives: [string];
  examples: [{ output: string; input: string; explanation?: string }];
};

function promptPanel(props: PrompPanelProps) {
  return (
    <div className="w-full px-6 py-12 md:w-1/3">
      <h2 className="text-2xl font-bold">
        {props.id}. {props.title}{" "}
        <span className="text-green-600">({props.difficulty})</span>
      </h2>

      <br />
      <h4 className="font-bold">Objective:</h4>
      {props.objectives.map(objective => (
        <>
          <div className="text-sm">{objective}</div>
          <br />
        </>
      ))}

      {props.examples.map((example, index) => (
        <>
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
        </>
      ))}
    </div>
  );
}

export default promptPanel;
