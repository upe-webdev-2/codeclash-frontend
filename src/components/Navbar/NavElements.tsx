import React from "react";
import Link from "next/link";
import Button from "../Button";
import { useRouter } from "next/router";

const NavElements = ({
  setIsLoggedIn
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <>
      <Button
        onclick={() => router.push("/signin")}
        type="none"
        movingGradient={false}
      >
        Sign In
      </Button>
      <Button
        onclick={() => {
          setIsLoggedIn(true);
          console.warn('Redirect user to "/join"');
          // router.push("/join")
        }}
        type="outline"
        movingGradient={true}
      >
        Log in
      </Button>
    </>
  );
};

export default NavElements;
