import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Crystal from "@/components/Crystal";

function BadgeDisplay(props) {
  const amount = props.amount; // Get the amount
  let list = []; // Initiate List
  // Add the correct amount of crystals to the list
  for (let i = 0; i < amount; i++) {
    list.push(<Crystal />);
  }
  //Iterate through the list and render items
  const listBadges = list.map(badge => <div key={badge}>{badge}</div>);
  return (
    //Put everything in a flex box
    <div className={`flex flex-row h-20 content-center items-center`}>
      {listBadges}
    </div>
  );
}

const LeaderboardItem = ({ name, rank, badgecount, minutes, score }) => {
  const router = useRouter();
  // Temporary Styling Constants. NEED TO IMPORT FROM SOMEWHERE ELSE
  const border =
    "p-[1px] bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary";
  const gradientBackground = "button-gradient bg-size-200 bg-pos-0";
  const radialBackground =
    "bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary";
  return (
    // This flexbox represents an entire row
    <div
      className={`flex flex-row rounded-lg ${border} content-center items-center`}
    >
      <div className={`w-[20%] px-5 text-left justify-self-center`}>{name}</div>
      <div className={`w-[10%] text-left text-green-500`}>
        {"+" + rank}
      </div>
      <div className={`w-[40%]`}>
        <BadgeDisplay amount={badgecount} />
      </div>
      <div className={`w-[20%] text-left`}>
        {Math.floor(minutes / 60) + ":" + (minutes % 60)}
      </div>
      <div className={`w-[10%] text-left`}>{score} </div>
    </div>
  );
};

export default LeaderboardItem;
