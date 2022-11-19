import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Crystal from "@/components/Crystal";

const LeaderboardItem = ({ name, rank, badgecount, minutes, score }) => {
  const router = useRouter();
  const border =
    "p-[1px] bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary";
  const gradientBackground = "button-gradient bg-size-200 bg-pos-0";
  const radialBackground =
    "bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary";

  return (
    <div
      className={`flex flex-nowrap rounded-lg ${border} h-20 content-center`}
    >
      <div className={`w-[20%] px-5 text-left justify-self-center`}>{name}</div>
      <div className={`w-[20%] px-5 text-left text-green-500 text-green-500`}>
        {"+" + rank}
      </div>
      <div className={`w-[20%] px-5 text-left`}>{badgecount} </div>
      <div className={`w-[20%] px-5 text-left`}>
        {Math.floor(minutes / 60) + ":" + (minutes % 60)}
      </div>
      <div className={`w-[20%] px-5 text-left`}>{score} </div>
    </div>
  );
};

export default LeaderboardItem;
