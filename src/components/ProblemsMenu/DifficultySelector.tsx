import { useState } from "react";
import Image from "next/image";

type DifficultySelector = {
  startPlaying: (difficulty: string) => void;
};

const DifficultySelector = ({ startPlaying }: DifficultySelector) => {
  const [difficultyCards] = useState([
    {
      difficulty: "Easy",
      image: "/static/problems-menu/easy.png",
      description:
        "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
      link: "#",
      background: "bg-[linear-gradient(180deg,_#565AAC_0%,_#2D2F61_63.38%)]"
    },
    {
      difficulty: "Medium",
      image: "/static/problems-menu/medium.png",
      description:
        "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
      link: "#",
      background:
        "bg-[linear-gradient(179.62deg,_#6b44d9db_29.69%,_#2D2F61_63.01%)]"
    },
    {
      difficulty: "Hard",
      image: "/static/problems-menu/medium.png",
      description:
        "Based on your selected difficulty level, we will select an appropriate problem for you to solve.",
      link: "#",
      background: "bg-[linear-gradient(180deg,_#6CFFED_-13.2%,_#2D2F61_61%)]"
    }
  ]);

  return (
    <>
      <div className="flex flex-col items-center w-full mb-20">
        <h1 className="font-extrabold font-gilroy text-[40px] leading-10 mb-9 w-fit">
          Choose your level
        </h1>

        <div className="text-center">
          <p>
            Based on your selected difficulty level, we will select an
            appropriate problem for you to solve.
          </p>
          <p>
            The next step involves selecting your preferred coding languages.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-16">
        {difficultyCards.map((card, index) => (
          <div
            key={index}
            className={`${card.background} shadow-[2px_11px_2px_-2px_rgba(34,_73,_214,_0.3)] flex flex-col justify-center items-center w-72 xl:w-96 rounded-2xl px-4 pb-10 xl:pb-20`}
          >
            <Image src={card.image} alt="" width={252} height={189} />

            <h1 className="text-2xl font-extrabold capitalize mb-7 xl:text-4xl xl:mb-10 font-gilroy">
              {card.difficulty}
            </h1>
            <p className="mb-10 text-base font-light text-center xl:text-xl xl:mb-16">
              {card.description}
            </p>

            <div className="bg-[linear-gradient(97.13deg,_#7335DA_17.89%,_#6CFFED_100.73%)] rounded-xl xl:rounded-3xl py-3 px-6 xl:px-9 xl:py-6 ">
              <button
                className="text-base font-extrabold xl:text-xl font-gilroy"
                onClick={() => startPlaying(card.difficulty)}
              >
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DifficultySelector;
