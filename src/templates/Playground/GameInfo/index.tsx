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
};

const GameInfo = ({ opponent, testCases }: GameInfo) => {
  /**
   * TODO: Get user from next/auth
   */
  const [user] = useState<Player>({
    username: "SEBAS0228",
    profilePicture: "/static/placeholder.jpeg",
    achievements: 12
  });

  return (
    <div className="flex items-center justify-between h-full">
      <PlayerStats
        {...user}
        totalTestCases={testCases.total}
        completedTestCases={testCases.userCompletion}
      />
      <Timer timeRemaining={90} timeLimit={120} />
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
