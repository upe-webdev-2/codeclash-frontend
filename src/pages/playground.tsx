import Tabs from "@/templates/Playground/Tabs";
import CustomEditor from "@/templates/Playground/CustomEditor";
import Description from "@/templates/Playground/Tabs/Description";
import GameInfo from "@/templates/Playground/GameInfo";
import { GetServerSideProps } from "next";
import { useEffect, useRef, useState } from "react";
import { getSession } from "next-auth/react";
import Result from "@/templates/Playground/Tabs/Result";
import io, { Socket } from "socket.io-client";

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
  jwt: { jwt: string; room: string };
  onSubmitCode: (code: string) => void;
  onTestCode: (code: string) => void;
  testCases?: {};
};

const Dom = ({ problem, jwt, onSubmitCode, onTestCode }: Playground) => {
  const [socket, setSocket] = useState<Socket>(null);
  const editorRef = useRef(null); // monaco editor
  const [tabManager, setTabManager] = useState(0); // instructions - results - (past submissions)?

  //! RAS syndrome everywhere

  // loading page should be the same url as the playground... and actually act like a loading page

  // JWT needs to have the problem id, the enemy's id, the users email (or user's id if you want consistency) and the room id
  // jwt token should have an expiration date of the currentTime + problemTime + bufferTime(5 minutes?)

  /**
   * Loading page: socket.io connects and waits until an emit happens with the jwt token and enemy id, jwt token will be store in local storage
   * Loading page: query api with enemy id to receive their image and name
   * Loading page: three seconds later both players get redirect to clash page
   * Clash page SSR: jwt token is sent to back end to receive the actual problem, backend reads the jwt token and sets user into their room
   * Clashing goes on until winner
   * Clash page: on winner, emit who the winner is
   * Clash page: checks to see if you are the winner and goes on from there
   */

  // localStorage.setItem(jwt, jwt)

  /**
   * to start the countdown, set timer to problems.timeLimit
   * To stop the countdown, set timer to null
   */
  // const [timer, setTimer] = useState<number>(problem.timeLimit);

  // console.log(socket);

  const [timer, setTimer] = useState<number>(null);

  useEffect(() => {
    setSocket(
      io(`http://localhost:3001`, {
        // withCredentials: true
        extraHeaders: {
          Authorization: `Bearer ${jwt.jwt}`
        }
      })
    );
  }, []);

  useEffect(() => {
    if (socket === null) {
      return;
    }
    console.log("Joining room");

    socket.emit("join_room", jwt);

    socket.on("test", data => {
      console.log("test");
      console.log(data);
    });

    /**add all the socket.on(...) */
    socket.on("submit", data => {
      console.log("Data: ");
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
    if (timer === 0) {
      socket.emit("timeOut", {
        id: socket.id,
        jwt: jwt,
        code: editorRef.current.getValue()
      });
      alert("Time limit exceeded!");
    }
  }, [timer]);

  const [testCases, setTestCases] = useState(null);
  const [completedAllTestCases, setCompletedAllTestCases] = useState(false); // from the sockets if the user was able to do all the test cases

  const handleSubmit = () => {
    /**
     * TODO: send code to sockets for validation
     */

    socket.emit("submit", {
      id: socket.id,
      // room: socket.room,
      jwt: jwt,
      code: editorRef.current.getValue()
    });

    // alert("Submit: \n\n\n" + editorRef.current.getValue());
  };

  const handleTest = () => {
    /**
     * TODO: Send code to sockets for test cases
     * * editorRef.current.getValue()
     */

    socket.emit("test", {
      id: socket.id,
      jwt: jwt,
      code: editorRef.current.getValue()
    });

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
      {/* TODO Remove this, only meant for development */}
      {jwt.jwt == "401" && (
        <div
          style={{
            position: "fixed",
            background: "black",
            zIndex: 9999,
            color: "white",
            fontSize: "20pt"
          }}
        >
          YOU ARE NOT LOGGED IN
        </div>
      )}
      {jwt.jwt == "401" || (
        <div
          style={{
            position: "fixed",
            right: 10,
            zIndex: 9999,
            background: "black",
            color: "white",
            fontSize: "20pt"
          }}
        >
          {jwt.room}
        </div>
      )}
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

export default function Playground(props: Playground) {
  return (
    <>
      <Dom {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query
}) => {
  const { problem } = query;
  const sessionToken = req.cookies["next-auth.session-token"];
  const jwtRes = await fetch("http://localhost:3001/auth/me", {
    method: "GET",
    headers: { cookies: JSON.stringify({ sessionToken }) }
  });

  let jwt;

  if (jwtRes.status == 401) {
    jwt = { jwt: "401" };
  } else {
    jwt = await jwtRes.json();
  }
  console.log(jwt);

  /**
   * get a jwt from auth/me (with a time limit set to the match length)
   * store jwt in cookie
   * every socket.io transaction will have the jwt, so we know who the user is even if they refresh the page
   *
   */

  /**
   * JWT gets passed down alongside the opponents info
   * Payload: user email, room id, problem id, experation date is the currenttime+timelimit+buffer
   */

  /**
   * code could be saved every time the user clicks test and submit
   */

  const response = await fetch(
    `${process.env.API_ENDPOINT}/problems/${query.problem}`,
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
      problem: data,
      jwt: jwt
    }
  };
};
