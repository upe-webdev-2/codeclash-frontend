import { CSSProperties, ReactNode } from "react";

type Button = {
  children: ReactNode;
  onclick: () => void;
  type: "fill" | "outline" | "none";
  movingGradient?: boolean;
  width?: string;
  height?: string;
  style?: CSSProperties;
  bold?: boolean;
};

const Button = ({
  children,
  onclick,
  type,
  movingGradient = false,
  width,
  height,
  style = {},
  bold = false
}: Button) => (
  <button
    onClick={onclick}
    style={{ height, width, ...style }}
    className={`rounded-[30px] transition-all duration-1000 bg-primary cursor-pointer ${
      bold ? "font-gilroy-bold" : "font-gilroy"
    }
        ${type !== "none" && " button-gradient "} ${
      movingGradient && " button-moving-gradient "
    }
    `}
  >
    <div
      className={`rounded-[30px] py-3 px-10  ${
        type !== "fill" && " button-outline "
      }`}
    >
      {children}
    </div>
  </button>
);
export default Button;
