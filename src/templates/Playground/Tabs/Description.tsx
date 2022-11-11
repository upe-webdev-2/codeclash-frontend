type Problem = {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  objectives: string[];
  examples: {
    output: string;
    input: string;
    explanation?: string;
  }[];
};

const Description = (problem: Problem) => {
  const difficultyColors = {
    Easy: "text-green-600",
    Medium: "text-yellow-600",
    Hard: "text-red-600"
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-gilroy-bold mb-7">
        <span>{problem.id}. </span>
        <span>{problem.title} </span>
        <span className={difficultyColors[problem.difficulty]}>
          ({problem.difficulty})
        </span>
      </h1>

      <div className="flex flex-col gap-4 mb-5 font-gilroy">
        {problem.objectives.map((obj, index) => (
          <h3 key={index}>{obj}</h3>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {problem.examples.map((example, index) => (
          <div key={index}>
            <h1 className="font-gilroy-bold">Example {index + 1}</h1>

            <div className="flex flex-col gap-2 p-5 my-5 rounded-lg bg-primary">
              {Object.entries(example).map(([key, value], index) => (
                <h3 key={index}>
                  <span className="mr-3 font-jetBrains">{key}: </span>
                  <span className="text-gray-600 font-jetBrains">{value}</span>
                </h3>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
