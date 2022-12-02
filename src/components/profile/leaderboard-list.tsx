import { useState } from "react";
import LeaderboardItem from "./leaderboard-item";

const LeaderboardList = () => {
  const [leaderboardMockData] = useState([
    {
      name: "Mike Perez",
      rank: 1,
      badgeCount: 6,
      minutes: 854,
      score: 148
    },
    {
      name: "Smyvens Estime",
      rank: 2,
      badgeCount: 4,
      minutes: 701,
      score: 127
    },
    {
      name: "Daniel Jonas",
      rank: 3,
      badgeCount: 7,
      minutes: 774,
      score: 124
    },
    {
      name: "David Ulloa",
      rank: 4,
      badgeCount: 4,
      minutes: 798,
      score: 117
    },
    {
      name: "Sebastian Martinez",
      rank: 5,
      badgeCount: 5,
      minutes: 754,
      score: 109
    },
    {
      name: "Gabriel Pedroza",
      rank: 6,
      badgeCount: 7,
      minutes: 516,
      score: 87
    },
    {
      name: "Gino Rey",
      rank: 7,
      badgeCount: 2,
      minutes: 824,
      score: 79
    },
    {
      name: "Vincent Carrancho",
      rank: 8,
      badgeCount: 1,
      minutes: 801,
      score: 69
    }
  ]);

  const border =
    "p-[1px] bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary";
  const gradientBackground = "button-gradient bg-size-200 bg-pos-0";
  const radialBackground =
    "bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary";

  return (
    <div className={`space-y-4 w-[66%] `}>
      <div className={`flex flex-row content-center items-center`}>
        <div className={`w-[20%] text-left`}>Leaderboard</div>
        <div className={`w-[10%] text-left`}>Rank</div>
        <div className={`w-[40%] text-left`}>Badges</div>
        <div className={`w-[20%] text-left`}>Hours</div>
        <div className={`w-[10%] text-left`}>Score</div>
      </div>

      {leaderboardMockData.map(
        ({ name, rank, badgeCount, minutes, score }, index) => {
          return (
            <LeaderboardItem
              key={index}
              name={name}
              rank={rank}
              badgecount={badgeCount}
              minutes={minutes}
              score={score}
            />
          );
        }
      )}
    </div>
  );
};
export default LeaderboardList;
