import Image from "next/image";
import Button from "../Button";

type DifficultySelector = {
  cards: {
    difficulty: string;
    image: string;
    description: string;
    background: string;
  }[];
  searchForGame: (difficulty: string) => void;
};

const DifficultySelector = ({ cards, searchForGame }: DifficultySelector) => {
  return (
    <>
      <div className="flex flex-col items-center w-full mb-20">
        <h1 className="font-gilroy-bold text-[40px] leading-10 mb-9 w-fit">
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
        {cards?.map(({ difficulty, image, description, background }, index) => (
          <div
            key={index}
            className={`${background} shadow-[2px_11px_2px_-2px_rgba(34,_73,_214,_0.3)] flex flex-col justify-between items-center w-72 xl:w-96 rounded-2xl px-4 py-10 gap-10`}
          >
            <div className="relative w-32 h-32">
              <Image
                src={image}
                alt=""
                className="object-contain"
                layout="fill"
              />
            </div>

            <h1 className="text-2xl capitalize xl:text-4xl font-gilroy-bold">
              {difficulty}
            </h1>
            <p className="text-base text-center font-gilroy xl:text-xl">
              {description}
            </p>
            <Button
              onclick={() => searchForGame(difficulty)}
              type={"fill"}
              bold
              movingGradient
            >
              Play Now
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DifficultySelector;
