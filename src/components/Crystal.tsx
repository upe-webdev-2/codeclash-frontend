import React from "react";
import Image from "next/image";
type Crystal = {
  alt?: string;
  type?: string;
  className?: string;
  width: string | number;
  height: string | number;
};

const Crystal = ({ alt, className, width, height }: Crystal) => {
  return (
    <>
      <div className={`h-[${height}] w-${width} relative`}>
        <Image
          className={`${className} object-contain`}
          alt={`${alt || "image of xp"}`}
          src="/static/xp.svg"
          layout="fill"
        />
      </div>
    </>
  );
};

export default Crystal;
