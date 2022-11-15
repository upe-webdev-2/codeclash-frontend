import { ReactNode } from "react";

type Container = {
  children: ReactNode;
  backgroundStyles?: string;
  borderStyles?: string;
  onHover?: true;
};

const Container = (props: Container) => {
  const { children, backgroundStyles = "", borderStyles = "", onHover } = props;

  return (
    <div
      className={`${borderStyles} bg-gradient-radial from-borderGradient-primary to-borderGradient-secondary p-[1px] rounded-2xl`}
    >
      <div
        className={`${backgroundStyles} ${
          onHover && "hover:to-cardGradient-tertiary"
        } rounded-2xl bg-gradient-radial from-cardGradient-primary to-cardGradient-secondary`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
