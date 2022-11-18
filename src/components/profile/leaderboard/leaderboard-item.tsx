import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Crystal from "@/components/Crystal";

const LeaderboardItem = ({ name, rank, badgecount, minutes, score }) => {
  const router = useRouter();
  return (
    <div className="table-row">
      <div className="table-cell ...">{name} </div>
      <div className="table-cell ...">{rank} </div>
      <div className="table-cell ...">{badgecount} </div>
      <div className="table-cell ...">{minutes} </div>
      <div className="table-cell ...">{score} </div>
    </div>
  );
};

export default LeaderboardItem;
