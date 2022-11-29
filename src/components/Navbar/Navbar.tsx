import React from "react";
import Image from "next/image";
import NavElements from "./NavElements";
import ProfileComponents from "./ProfileComponents";
import Router from "next/router";
import { useSession } from "next-auth/react";

type Navbar = {
  hideLogo?: true;
  hideElements?: true;
};

const NavbarRight = ({
  status
}: {
  status: "authenticated" | "loading" | "unauthenticated";
}) => {
  return (
    <>
      {status === "authenticated" && <ProfileComponents />}
      {status === "unauthenticated" && <NavElements />}
    </>
  );
};

const Navbar = ({ hideLogo, hideElements }: Navbar) => {
  const { status } = useSession();

  return (
    <div className="flex justify-between w-full pt-1 text-lg px-28">
      <div
        className="flex flex-col m-3 cursor-pointer"
        style={{ visibility: hideLogo ? "hidden" : "visible" }}
        onClick={() => {
          if (!(typeof Router.query === "string" && Router.query === "/")) {
            Router.push("/");
          }
        }}
      >
        <Image
          src={"/static/logo.svg"}
          alt="Image of Code Clash Logo"
          width={"51.22px"}
          height={"49.22px"}
        />
        <p className="text-base text-center w-100 font-poppins">
          Code<span className="font-bold">Clash</span>
        </p>
      </div>

      <div
        style={{
          visibility: hideElements ? "hidden" : "visible",
          gap: status === "authenticated" ? "1rem" : "2.5rem"
        }}
        className="flex my-auto"
      >
        <NavbarRight status={status} />
      </div>
    </div>
  );
};

export default Navbar;
