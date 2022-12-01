import ConclusionModal from "@/components/ConclusionModal";
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
  const [displayModal, setDisplayModal] = useState<boolean>(true);
  const [didIWin, setDidIWin] = useState<boolean>(true);


  console.log(useSession());
  

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
        <div className="fixed z-[100]">
          <button
            onClick={() => {
              setDisplayModal(!displayModal);
            }}
          >
            Flip Display
          </button>{" "}
          |{" "}
          <button
            onClick={() => {
              setDidIWin(!didIWin);
            }}
          >
            Flip Win
          </button>
        </div>
        <ConclusionModal
          difficulty={"easy"}
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          name={"Daniel"}
          profileImage={
            useSession()?.data?.user?.image ||
            "https://avatars.githubusercontent.com/u/83048344?v=4"
          }
          didIWin={didIWin}
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
