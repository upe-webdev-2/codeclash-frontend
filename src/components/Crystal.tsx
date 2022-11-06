import React from "react";
import Image from "next/image";
type Crystal = {
  alt?: string;
  type?: string;
  className?: string;
  width: string;
  height: string;
};

const Crystal = ({ alt, className, width = "3rem", height }: Crystal) => {
  // error with passing width
  // sometimes tailwind will ignore the width prop, causing the Crystal to not appear
  // lots of headache has been caused because of that
  return (
    <div className={`h-[${height}] w-[${width}] relative`}>
      <Image
        className={`${className} object-contain `}
        alt={`${alt || "image of xp"}`}
        src="/static/xp.svg"
        layout="fill"
      />
      <div className="bottom-[-10px] absolute content-[''] w-[180%] translate-x-[-20%] h-[40%] rounded-[200px/50px] bg-gradient-radial from-[#739AFF40] via-[#739AFF05] to-transparent"></div>
    </div>
  );
};

export default Crystal;
