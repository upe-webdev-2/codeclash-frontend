type Result = {
  testCases:
  | {
    input: string;
    output: string;
    expected: string;
    Stdout?: string;
  }[]
  | null;
  passed: boolean;
};

const Result = ({ testCases, passed }: Result) => {
  if (testCases.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <h3 className="text-xl text-gray-500 font-gilroy">
          You must test your code first
        </h3>
      </div>
    );
  }

  return (
    <div>
      <h1
        className={`${passed ? "text-green-600" : "text-red-600"
          } mb-5 text-2xl  opacity-70 font-gilroy-bold`}
      >
        {passed ? "Congratulations!!!" : "At least one test case Failed!"}
      </h1>

      <div className="flex flex-col gap-4">
        {testCases.map((testC, index) => (
          <div key={index}>
            <div className="flex items-center justify-start gap-3">
              <div
                className={`${testC.output === testC.expected
                    ? "bg-green-600"
                    : "bg-red-600"
                  } rounded-full p-1`}
              />
              <h1 className="font-gilroy-bold">Case: {index + 1}</h1>
            </div>

            <div className="flex flex-col gap-2 p-5 my-5 rounded-lg bg-primary">
              {Object.entries(testC).map(([key, value], index) => (
                <h3 key={index}>
                  <span className="mr-3 text-gray-300 font-jetBrains">
                    {key}:{" "}
                  </span>
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

export default Result;
