import { useState } from "react";
import LeaderboardItem from "./leaderboard-item";

const LeaderboardList = () => {
  const [leaderboardMockData] = useState([
    {
      name: "Vincent Carrancho",
      rank: 1,
      badgeCount: 5,
      minutes: 801,
      score: 169
    },
    {
      name: "Mike Perez",
      rank: 2,
      badgeCount: 6,
      minutes: 854,
      score: 148
    },
    {
      name: "Smyvens Estime",
      rank: 3,
      badgeCount: 4,
      minutes: 701,
      score: 127
    },
    {
      name: "Daniel Jonas",
      rank: 4,
      badgeCount: 7,
      minutes: 774,
      score: 124
    },
    {
      name: "David Ulloa",
      rank: 5,
      badgeCount: 6,
      minutes: 798,
      score: 117
    },
    {
      name: "Gino Rey",
      rank: 6,
      badgeCount: 4,
      minutes: 824,
      score: 79
    },
    {
      name: "Gabriel Pedroza",
      rank: 7,
      badgeCount: 5,
      minutes: 516,
      score: 87
    },
    {
      name: "Sebastian Martinez",
      rank: 8,
      badgeCount: 3,
      minutes: 754,
      score: 80
    },
    {
      name: "Jackson Perez",
      rank: 9,
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
