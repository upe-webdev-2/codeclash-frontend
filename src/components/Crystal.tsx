import React from "react";
import Image from "next/image";

type Crystal = {
  alt?: string;
  type?: string;
  styles?: {};
  width?: string;
  height?: string;
};

const Crystal = ({
  alt,
  styles = {},
  width = "3rem",
  height = "3rem"
}: Crystal) => (
  <div
    className={`relative`}
    style={{ width: width, height: height, ...styles }}
  >
    <Image
      className={`object-contain `}
      alt={`${alt || "image of xp"}`}
      src="/static/xp.svg"
      layout="fill"
    />
    <div className="bottom-[-10px] absolute content-[''] w-[180%] translate-x-[-20%] h-[40%] rounded-[200px/50px] bg-gradient-radial from-[#739AFF40] via-[#739AFF05] to-transparent"></div>
  </div>
);

export default Crystal;
