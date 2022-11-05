import React from "react";
import Image from "next/image";
import NavElements from "./NavElements";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full pt-1 px-28 text-lg">
      <div className="flex flex-col">
        <Image
          src={"/static/CodeClashLogo.png"}
          alt="Image of Code Clash Logo"
          width={"101.94px"}
          height={"101.88px"}
        />
        <p className="pt-2 text-center w-100 font-poppins">
          Code<span className="font-bold">Clash</span>
        </p>
      </div>
      <NavElements/>
    </div>
  );
};

export default Navbar;
