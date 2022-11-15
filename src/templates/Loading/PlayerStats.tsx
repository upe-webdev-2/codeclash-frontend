import Crystal from "@/components/Crystal";
import Image from "next/image";

type PlayerStats = {
  image: string;
  username: string;
  achievements: number;
  extraCrystal?: true;
};

const PlayerStats = (props: PlayerStats) => {
  const { image, username, achievements, extraCrystal } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-gilroy-bold">{username}</h1>

      <div className="rounded-full">
        <Image
          src={image}
          alt=""
          width={150}
          height={150}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex items-center justify-center gap-1">
        <h1 className="mr-4 text-3xl font-gilroy-bold">{achievements}</h1>
        <Crystal width="2rem" />
        {extraCrystal && <Crystal width="2em" />}
      </div>
    </div>
  );
};

export default PlayerStats;
