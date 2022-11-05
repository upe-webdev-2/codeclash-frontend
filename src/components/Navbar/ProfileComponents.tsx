import Image from "next/image";
import React, { useState } from "react";
import Crystal from "../Crystal"

const ProfileComponents = () => {
  const [XP, setXP] = useState(12);
  return (
    <div className="flex my-auto">
      <span className="font-bold text-center my-auto">

      {XP}
      </span>
      <Crystal width={12} height={"49px"} />
      <Image
        src={"/static/profile_placeholder.png"}
        alt="user profile image"
        width="49"
        height="49"
      />
      {/* <div>ProfileComponents</div> */}
    </div>
  );
};

export default ProfileComponents;
