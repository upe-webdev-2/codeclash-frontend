import Image from "next/image";
import { useState } from "react";

type MenuProps = (props: {}) => JSX.Element;

const Menu: MenuProps = () => {
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
      <div>
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
              className={`${card.background} shadow-[2px_11px_2px_-2px_rgba(34,_73,_214,_0.3)] flex flex-col justify-center items-center w-96 rounded-2xl px-4 pb-20`}
            >
              <Image src={card.image} alt="" width={252} height={189} />

              <h1 className="pb-10 text-4xl font-extrabold capitalize font-gilroy">
                {card.difficulty}
              </h1>
              <p className="pb-16 text-center">{card.description}</p>

              <div className="bg-[linear-gradient(97.13deg,_#7335DA_17.89%,_#6CFFED_100.73%)] rounded-3xl px-9 py-6 ">
                <button
                  className="text-xl font-extrabold font-gilroy"
                  onClick={() =>
                    console.log(`You've selected ${card.difficulty}`)
                  }
                >
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
