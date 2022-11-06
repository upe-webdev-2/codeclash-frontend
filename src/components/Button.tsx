import React from "react";

type Button = {
  name: string;
  onclick: () => void;
  type: "fill" | "outline" | "none";
  movingGradient: boolean;
};

const Button = ({ name, onclick, type, movingGradient }: Button) => (
  <button
    onClick={onclick}
    className={`rounded-[30px] transition-all duration-1000 bg-primary cursor-pointer ${
      type !== "none" && "bg-gradient-to-r p-[3px] from-tertiary to-secondary "
    } ${movingGradient && " bg-size-200 bg-pos-0 hover:bg-pos-100"}`}
  >
    <div
      className={`rounded-[30px] py-3 px-10  ${
        type !== "fill" && "bg-primary"
      }`}
    >
      {name}
    </div>
  </button>
);

export default Button;
