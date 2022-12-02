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
        className={`${inverted && "justify-end flex-row-reverse"
          } flex justify-center gap-5 relative`}
      >
        {/* profile picture */}
        <div className="z-10 flex items-center justify-center p-2 bg-black rounded-full bg-gradient-radial from-cardGradient-primary via-cardGradient-primary to-cardGradient-secondary">
          <Image
            src={profilePicture}
            alt="Profile Picture"
            width={70}
            height={70}
            className="object-cover rounded-full"
          />
        </div>

        {/* number of test completed out of total test cases */}
        <h1 className="mt-3 text-lg font-gilroy-bold">
          {completedTestCases}/{totalTestCases}
        </h1>

        {/* Test cases progress bar */}
        <div
          className={`${inverted ? "-left-6 justify-end" : "-right-6"
            } absolute w-28 h-3 bottom-3 rounded-full flex bg-quaternary`}
        >
          <div
            className={`${inverted ? "bg-gradient-to-l" : "bg-gradient-to-r"
              } from-secondary to-tertiary h-full rounded-full bg-opacity-100`}
            style={{ width: `${(completedTestCases / totalTestCases) * 100}%` }}
          />
        </div>
      </div>

      {/* user name and total cystals */}
      <div className="flex items-center justify-center gap-3 font-gilroy-bold">
        <h1 className="font-gilroy-bold">{username.split(' ')[0]}</h1>
        <span className="flex items-center justify-center">
          <h1>{achievements}</h1>
          <Crystal width="1rem" />
        </span>
      </div>
    </div>
  );
};

export default PlayerStats;
