import ConclusionModal from "@/components/ConclusionModal";
import Navbar from "@/components/Navbar/Navbar";
import Loading from "@/templates/Loading";
import ProblemsMenu from "@/templates/ProblemsMenu";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useState } from "react";

const Dom = () => {
  const { status } = useSession();
  const [isLoading, setLoading] = useState(false);

  // FIXME: FOR TESTING ONLY. user should be redirected to auth if they try to play (not logged in)
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
        {/* TODO: conditionally render the "end of game" component if the match is over*/}

        {/* <ConclusionModal
          displayModal={true}
          name={"Daniel"}
          profileImage={
            useSession()?.data?.user?.image ||
            "https://avatars.githubusercontent.com/u/83048344?v=4"
          }
          didIWin={true}
        /> */}
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
