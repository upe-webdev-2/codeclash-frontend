import React from "react";

type Button = {
  name: string;
  onclick: () => void;
  type: "fill" | "outline" | "none";
};

const Button = ({ name, onclick, type }: Button) => (
    <button
      onClick={onclick}
      className={`rounded-[30px] bg-primary cursor-pointer ${
        type !== "none" && "bg-gradient-to-r p-[3px] from-tertiary to-secondary"
      }`}
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