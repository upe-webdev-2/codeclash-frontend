import { useState } from "react";
import LeaderboardItem from "./leaderboard-item";

const LeaderboardList = () => {
  const border =
    "p-[1px] bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary";
  const gradientBackground = "button-gradient bg-size-200 bg-pos-0";
  const radialBackground =
    "bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary";
  const [leaderboardMockData] = useState([
    {
      name: "Tim Roberts",
      rank: 1,
      badgeCount: 4,
      minutes: 754,
      score: 124
    },
    {
      name: "Tim Short",
      rank: 3,
      badgeCount: 3,
      minutes: 516,
      score: 87
    },
    {
      name: "Tim Short",
      rank: 4,
      badgeCount: 1,
      minutes: 824,
      score: 12
    }
  ]);

  return (
    <div className="table w-full ...">
      <div className="table-header-group ...">
        <div className="table-row">
          <div className="table-cell text-left ...">Name</div>
          <div className="table-cell text-left ...">Rank</div>
          <div className="table-cell text-left ...">Badges</div>
          <div className="table-cell text-left ...">Hours</div>
          <div className="table-cell text-left ...">Score</div>
        </div>
      </div>

      <div className="table-row-group">
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
    </div>
  );
};
export default LeaderboardList;
