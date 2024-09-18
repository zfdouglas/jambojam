import { ReactElement } from "react";

type CenteredContainerProps = {
  children: ReactElement;
};

export const CenteredContainer = ({ children }: CenteredContainerProps) => {
  return (
    <div className={"flex w-full justify-center items-center"}>{children}</div>
  );
};
