import ConclusionModal from "@/components/ConclusionModal";
import Navbar from "@/components/Navbar/Navbar";
import ProblemsMenu from "@/templates/ProblemsMenu";
import { useSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import Router from "next/router";

const Dom = () => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    Router.push("/auth");
    return <></>;
  }

  const searchForGame = (difficulty: string) => {
    console.log(`Searching for ${difficulty}`);
    setLoading(true);
  };

  const cancelSearchForGame = () => {
    /**
     * TODO: Use sockets to notify backend to stop the search for a game
     */
    console.log("Cancel search for game");
    setLoading(false);
  };
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <ConclusionModal
          displayModal={true}
          name={"Daniel"}
          profileImage={
            useSession()?.data?.user?.image ||
            "https://avatars.githubusercontent.com/u/83048344?v=4"
          }
          didIWin={true}
        />

        {isLoading ? (
          <Loading onCancel={cancelSearchForGame} />
        ) : (
          <ProblemsMenu searchForGame={searchForGame} />
        )}
      </div>
    </>
  );
};

export default function Menu() {
  return (
    <>
      <Dom />
    </>
  );
}
