import Crystal from "@/components/Crystal";
import Image from "next/image";

type PlayerStats = {
  username: string;
  profilePicture: string;
  achievements: number;
  totalTestCases: number;
  completedTestCases: number;
  inverted?: true;
};

const PlayerStats = (params: PlayerStats) => {
  const {
    username,
    profilePicture,
    achievements,
    totalTestCases,
    completedTestCases,
    inverted
  } = params;

  return (
    <div>
      <div
        className={`${
          inverted && "justify-end flex-row-reverse"
        } flex justify-center gap-5 relative`}
      >
        <div className="flex items-center justify-center p-2 rounded-full bg-gradient-radial from-borderGradient-primary to-cardGradient-secondary">
          <Image
            src={profilePicture}
            alt="Profile Picture"
            width={70}
            height={70}
            className="z-10 object-cover rounded-full"
          />
        </div>

        <h1 className="mt-3 text-lg font-gilroy-bold">
          {completedTestCases}/{totalTestCases}
        </h1>

        <div
          className={`${
            inverted ? "-left-6 justify-end" : "-right-6"
          } absolute w-28 h-3 bottom-3 rounded-full flex`}
        >
          <div
            className={`${
              inverted ? "bg-gradient-to-l" : "bg-gradient-to-r"
            } from-secondary to-tertiary h-full rounded-full`}
            style={{ width: `${(completedTestCases / totalTestCases) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 font-gilroy-bold">
        <h1 className="font-gilroy-bold">{username}</h1>
        <span className="flex items-center justify-center">
          <h1>{achievements}</h1>
          <Crystal width="1rem" />
        </span>
      </div>
    </div>
  );
};

export default PlayerStats;
