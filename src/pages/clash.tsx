import Navbar from "@/components/Navbar/Navbar";
import Loading from "@/templates/Loading";
import Playground from "@/templates/Playground";
import { UserInfo, Problem } from "@/templates/Playground/data";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const Dom = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [problem, setProblem] = useState<Problem>({} as Problem);
  const [opponent, setOpponent] = useState<UserInfo>({} as UserInfo)
  const [socket, setSocket] = useState<Socket>(null);
  const session = useSession()

  const cancelGameSearch = () => {
    socket.emit("playerLeave", {
      username: session.data?.user.email
    });
    socket.disconnect();
  };

  const handleSubmitCode = (code: string) => {
    socket.emit("playerSubmit", {
      userCode: code,
      username: session.data?.user.email
    });
  };

  const handleTestCode = (code: string) => {
    socket.emit("playerTest", {
      userCode: code,
      username: session.data?.user.email
    });
  };

  useEffect(() => {
    setSocket(
      io(`${process.env.NEXT_PUBLIC_SOCKET_ENDPOINT}/play`, {
        auth: { username: session.data?.user.email }
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (socket === null) {
      return;
    }

    socket.emit("playerJoin", {
      username: session.data?.user.email
    });

    socket.on("startGame", (data: any) => {
      console.log("start game socket call\n", data);
      setProblem(data.problemInfo);
      setLoading(false);
    });

    socket.on("finishedWaitingRoom", (data: any) => {
      console.log("finished waiting room socket call\n", data);

      setOpponent({
        username: data.opponentInfo.name,
        profilePicture: data.opponentInfo.image,
        achievements: data.opponentInfo.xp
      })
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
      <Loading onCancel={() => cancelGameSearch()} opponent={opponent} />
    </>
  ) : (
    <Playground
      problem={problem}
      onSubmitCode={handleSubmitCode}
      onTestCode={handleTestCode}
      opponent={opponent}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    };
  }

  if (!context.query.difficulty) {
    return {
      redirect: {
        destination: "/menu",
        permanent: false
      }
    };
  }

  return {
    props: {
      difficulty: context.query.difficulty
    }
  };
};
