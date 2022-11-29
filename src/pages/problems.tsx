import Link from "next/link";

const URL = "http://localhost:8000";

// DOM elements here
const DOM = ({ problems }) => {
  return (
    <>
      <div className="flex flex-col w-4/5 mt-5">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                ID
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Title
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Difficulty
              </th>
            </tr>
          </thead>

          <tbody>
            {problems.map((problem, index) => {
              return (
                <Link key={index} href={`/problems/${problem.id}`}>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:cursor-pointer hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {problem.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {problem.title}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {problem.difficulty}
                    </td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  return <></>;
};

export default function problems(props) {
  return (
    <>
      <DOM {...props} />
      {/* <R3F /> */}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${URL}/problems`);
  const data = await res.json();

  return {
    props: {
      title: "Problems",
      problems: data
    }
  };
}
