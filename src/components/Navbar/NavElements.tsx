import React from "react";
import Button from "../Button";
import { signIn } from "next-auth/react";

const NavElements = () => {
  return (
    <div className="font-gilroy">
      <Button
        onclick={() => {
          signIn();
        }}
        type="outline"
        movingGradient={true}
      >
        Join
      </Button>
    </div>
  );
};

export default NavElements;
