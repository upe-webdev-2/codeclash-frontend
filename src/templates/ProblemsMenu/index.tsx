import { useState } from "react";
import DifficultyCard, { DifficultyCardParams } from "./DifficultyCards";

type ProblemsMenu = {
  searchForGame: (difficulty: string) => void;
};

const ProblemsMenu = ({ searchForGame }: ProblemsMenu) => {
  const [difficultyCards] = useState<DifficultyCardParams[]>([
    {
      difficulty: "Easy",
      description:
        "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
      image: {
        link: "/static/problems-menu/easy.svg",
        size: 120
      },
      clickHandler: searchForGame
    },
    {
      difficulty: "Medium",
      description:
        "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
      image: {
        link: "/static/problems-menu/medium.svg",
        size: 110
      },
      clickHandler: searchForGame
    },
    {
      difficulty: "Hard",
      description:
        "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
      image: {
        link: "/static/problems-menu/hard.svg",
        size: 150
      },
      clickHandler: searchForGame
    }
  ]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-20">
      <div className="text-center">
        <h1 className="mb-10 text-4xl font-gilroy-bold">Choose your level</h1>

        <p className="text-xl font-gilroy">
          Based on your selected difficulty level, we will select an appropriate
          problem for you to solve.
        </p>
        <p>The next step involves selecting your preferred coding languages.</p>
      </div>

      <div className="flex items-center justify-center gap-10">
        {difficultyCards.map((card, index) => (
          <DifficultyCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ProblemsMenu;
