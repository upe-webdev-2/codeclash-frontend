import React, { useState } from "react";
import Image from "next/image";
import NavElements from "./NavElements";
import ProfileComponents from "./ProfileComponents";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <div className="flex justify-between w-full pt-1 text-lg px-28">
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src={"/static/logo.svg"}
          alt="Image of Code Clash Logo"
          width={"101.94px"}
          height={"101.88px"}
        />
        <p className="pt-2 text-center w-100 font-poppins">
          Code<span className="font-bold">Clash</span>
        </p>
      </div>
      {isLoggedIn ? (
        <ProfileComponents setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <NavElements setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default Navbar;
