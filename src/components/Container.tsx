import { ReactNode } from "react";

type Container = {
  children: ReactNode;
  extraTailwindStyles?: string;
};

const Container = ({ children, extraTailwindStyles = "" }: Container) => {
  return (
    <div className="bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary p-[1px] rounded-2xl">
      <div
        className={`${extraTailwindStyles} rounded-2xl w-fit bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
