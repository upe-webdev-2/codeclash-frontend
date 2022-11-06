import Image from "next/image";
import React, { useState } from "react";
import Crystal from "../Crystal";

const ProfileComponents = () => {
  const [XP, setXP] = useState(12);
  return (
    <div className="flex gap-4 my-auto">
      <span className="my-auto font-bold text-center">{XP}</span>
      <Crystal width={"3rem"} height={"49px"} />
      <Image
        src={"/static/profile_placeholder.png"}
        alt="user profile image"
        width="49"
        height="49"
      />
    </div>
  );
};

export default ProfileComponents;
