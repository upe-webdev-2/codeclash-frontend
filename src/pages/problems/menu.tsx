import DifficultySelector from "@/components/ProblemsMenu/DifficultySelector";
import LoadingScreen from "@/components/ProblemsMenu/LoadingScreen";
import { useState } from "react";

const Menu = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startPlaying = (difficulty: string) => {
    console.log(`You clicked on ${difficulty}`);
    setIsLoading(true);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <DifficultySelector startPlaying={startPlaying} />
      )}
    </>
  );
};

export default Menu;
