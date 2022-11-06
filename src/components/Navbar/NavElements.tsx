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
    <div className="flex my-auto gap-10">
      <Button
        name={"Sign in"}
        onclick={() => router.push("/signin")}
        type="none"
        movingGradient={false}
      />
      <Button
        name={"Join"}
        onclick={() => {
          setIsLoggedIn(true);
          console.warn('Redirect user to "/join"');
          // router.push("/join")
        }}
        type="fill"
        movingGradient={true}
      />
    </div>
  );
};

export default NavElements;
