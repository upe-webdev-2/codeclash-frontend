import Button from "@/components/Button";
import Image from "next/image";

export type DifficultyCardParams = {
  difficulty: string;
  description: string;
  image: {
    link: string;
    size: number;
  };
  clickHandler: (difficulty: string) => void;
};

const DifficultyCard = (params: DifficultyCardParams) => {
  const { difficulty, description, image, clickHandler } = params;
  const background =
    "bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary";

  return (
    <div className="p-[2px] rounded-2xl bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary">
      <div
        className={`${background} text-center w-96 rounded-2xl px-4 pb-16 pt-5`}
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
            type="outline"
            movingGradient
          >
            Play Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DifficultyCard;
