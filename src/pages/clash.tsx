import Loading from "@/templates/Loading";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Playground from "./playground";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";

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
  starterCode: string;
  timeLimit: number;
};

const Dom = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [problem, setProblem] = useState<Problem>({} as Problem);
  const [socket, setSocket] = useState<Socket>(null);
  const [tempPlayer] = useState(Date.now().toString()); // FIXME: use session for prod

  const cancelGameSearch = () => {
    socket.emit("playerLeave", {
      username: tempPlayer
    });
    socket.disconnect();
    router.push("/menu");
  };

  const handleSubmitCode = (code: string) => {
    socket.emit("playerSubmit", {
      userCode: code,
      username: tempPlayer
    });
  };

  const handleTestCode = (code: string) => {
    socket.emit("playerTest", {
      userCode: code,
      username: tempPlayer
    });
  };

  useEffect(() => {
    setSocket(
      io(`${process.env.NEXT_PUBLIC_SOCKET_ENDPOINT}/play`, {
        auth: { username: tempPlayer }
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (socket === null) {
      return;
    }

    socket.emit("playerJoin", {
      username: tempPlayer
    });

    socket.on("readyGame", (data: any) => {
      console.log("start game socket call\n", data);
      setProblem(data.problemInfo);
      setLoading(false);
    });

    socket.on("finishedWaitingRoom", (data: any) => {
      console.log("finished waiting room socket call\n", data);
      socket.emit("readyGame", { roomName: data.roomName });
    });

    socket.on("playerTestResult", (data: any) => {
      console.log("Player tested something\n", data);
    });

    socket.on("playerSubmitResult", (data: any) => {
      console.log("Player submitted something\n", data);
    });

    socket.on("finishedGame", (data: any) => {
      console.log("finished game socket call\n", data);
    });

    return () => {
      cancelGameSearch();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return isLoading ? (
    <>
      <Navbar />
      <Loading onCancel={() => cancelGameSearch()} />
    </>
  ) : (
    <Playground
      problem={problem}
      onSubmitCode={handleSubmitCode}
      onTestCode={handleTestCode}
    />
  );
};

export default function Clash() {
  return (
    <>
      <Dom />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.difficulty) {
    return {
      redirect: {
        destination: "/menu",
        permanent: false
      }
    };
  }

  return {
    props: {
      difficulty: query.difficulty
    }
  };
};
