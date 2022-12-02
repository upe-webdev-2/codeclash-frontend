import React from "react";
import Image from "next/image";
import NavElements from "./NavElements";
import ProfileComponents from "./ProfileComponents";
import Router from "next/router";
import { useSession } from "next-auth/react";

type Navbar = {
  hideLogo?: true;
  hideElements?: true;
  user?: { name?: string; email?: string; image?: string };
};

const NavbarRight = ({
  status,
  user
}: {
  status: "authenticated" | "loading" | "unauthenticated";
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}) => {
  return (
    <>
      {status === "authenticated" && <ProfileComponents user={user} />}
      {status === "unauthenticated" && <NavElements />}
    </>
  );
};

const Navbar = ({ hideLogo, hideElements, user }: Navbar) => {
  const { status } = useSession();
  return (
    <div className="flex justify-between w-full pt-1 text-lg px-28">
      <div
        className="flex flex-col m-3 cursor-pointer"
        style={{ visibility: hideLogo ? "hidden" : "visible" }}
        onClick={() => {
          if (
            !(typeof Router.query === "string" && Router.query === "/") &&
            status === "unauthenticated"
          ) {
            Router.push("/");
          } else if (
            !(typeof Router.query === "string" && Router.query === "/menu") &&
            status === "authenticated"
          ) {
            Router.push("/menu");
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
          gap: "1rem"
        }}
        className="flex my-auto"
      >
        <NavbarRight status={user ? "authenticated" : status} user={user} />
      </div>
    </div>
  );
};

export default Navbar;
