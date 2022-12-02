import Navbar from "@/components/Navbar/Navbar";
import Loading from "@/templates/Loading";
import ProblemsMenu from "@/templates/ProblemsMenu";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Dom = () => {
  const [isLoading, setLoading] = useState(false);

  const searchForGame = (difficulty: string) => {
    /**
     * TODO: Use sockets to notify backend to search for a game
     */
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
