import Navbar from "@/components/Navbar/Navbar";
import DifficultySelector from "@/components/ProblemsMenu/DifficultySelector";
import LoadingScreen from "@/components/ProblemsMenu/LoadingScreen";
import Router from "next/router";
import { useState } from "react";

const Dom = () => {
  const [isLoading, setIsLoading] = useState(false);

  const searchForGame = (difficulty: string) => {
    /**
     * TODO: Notify backend through socket to start looking for a game
     */
    console.log(`You clicked on ${difficulty}`);
    setIsLoading(true);

    /**
     * TODO: When backend finds a game, navigate user to the coding screen and start the game
     */
    window.setTimeout(() => {
      startGame();
    }, 3000);
  };

  const startGame = () => {
    /**
     * FIXME: Generate link a dynamic link
     */
    Router.push("/problems/1");
  };

  return (
    <>
      <Navbar />

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <DifficultySelector
          cards={[
            {
              difficulty: "Easy",
              image: "/static/problems-menu/easy.svg",
              description:
                "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
              background:
                "bg-[linear-gradient(180deg,_#565AAC_0%,_#2D2F61_63.38%)]"
            },
            {
              difficulty: "Medium",
              image: "/static/problems-menu/medium.svg",
              description:
                "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
              background:
                "bg-[linear-gradient(179.62deg,_#6b44d9db_29.69%,_#2D2F61_63.01%)]"
            },
            {
              difficulty: "Hard",
              image: "/static/problems-menu/hard.svg",
              description:
                "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
              background:
                "bg-[linear-gradient(180deg,_#6CFFED_-13.2%,_#2D2F61_61%)]"
            }
          ]}
          searchForGame={searchForGame}
        />
      )}
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
