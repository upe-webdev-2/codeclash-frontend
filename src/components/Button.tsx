import { ReactNode } from "react";
import CSS from 'csstype';


type Button = {
  children: ReactNode;
  onclick: () => void;
  type: "fill" | "outline" | "none";
  movingGradient: boolean;
  width?: string;
  height?: string;
  style?: CSS.Properties;
};

const Button = ({
  children,
  onclick,
  type,
  movingGradient,
  width,
  height,
  style = {}
}: Button) => (
  <button
    onClick={onclick}
    style={{ height, width, ...style }}
    className={`rounded-[30px] transition-all duration-1000 bg-primary cursor-pointer 
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
