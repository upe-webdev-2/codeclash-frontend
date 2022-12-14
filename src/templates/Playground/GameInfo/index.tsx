import { useSession } from "next-auth/react";
import { ElementRef, useRef, useState } from "react";
import PlayerStats from "./PlayerStats";
import Timer from "./Timer";

type Player = {
  username: string;
  profilePicture: string;
  achievements: number;
};

type GameInfo = {
  opponent: Player;
  testCases: {
    total: number;
    userCompletion: number;
    opponentCompletion: number;
  };
  timer: {
    timeLimit: number;
    timeRemaining: number;
  };
};

const GameInfo = ({ opponent, testCases, timer }: GameInfo) => {
  const { data } = useSession()
  /**
   * TODO: Get user from next/auth
   */
  const [user] = useState<Player>({
    username: data.user.name,
    profilePicture: data.user.image,
    achievements: 12
  });

  return (
    <div className="flex items-center justify-between h-full">
      <PlayerStats
        {...user}
        totalTestCases={testCases.total}
        completedTestCases={testCases.userCompletion}
      />
      <Timer {...timer} />
      <PlayerStats
        {...opponent}
        totalTestCases={testCases.total}
        completedTestCases={testCases.opponentCompletion}
        inverted
      />
    </div>
  );
};

export default GameInfo;
