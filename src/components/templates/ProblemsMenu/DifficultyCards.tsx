import Button from "@/components/Button";
import Image from "next/image";

export type DifficultyCardParams = {
  difficulty: string;
  description: string;
  image: {
    link: string;
    size: number;
  };
  background: string;
  clickHandler: (difficulty: string) => void;
};

const DifficultyCard = (params: DifficultyCardParams) => {
  const { difficulty, description, image, background, clickHandler } = params;
  const shadow = "shadow-[2px_11px_2px_-2px_rgba(34,_73,_214,_0.3)]";

  return (
    <div
      className={`${background} ${shadow} text-center w-96 rounded-2xl px-4 pb-16 pt-5`}
    >
      <div className="flex items-center justify-center h-40">
        <Image
          src={image.link}
          alt={difficulty}
          width={image.size}
          height={image.size}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-gilroy-bold">{difficulty}</h1>
        <p className="text-xl font-gilroy">{description}</p>
      </div>

      <div className="mt-16">
        <Button
          onclick={() => clickHandler(difficulty)}
          type="fill"
          movingGradient
        >
          Play Now
        </Button>
      </div>
    </div>
  );
};

export default DifficultyCard;
