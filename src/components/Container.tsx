import { ReactNode } from "react";

type Container = {
  children: ReactNode;
};

const Container = ({ children }: Container) => {
  return (
    <div className="w-fit bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary p-[1px] rounded-2xl">
      <div className="rounded-2xl w-fit bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary">
        {children}
      </div>
    </div>
  );
};

export default Container;
