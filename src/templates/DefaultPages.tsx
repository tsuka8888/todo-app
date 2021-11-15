import React, { ReactElement } from "react";
import { Header } from "../organisms/Header";

type DefaultPagesProps = {
  children: ReactElement;
};

export const DefaultPages: React.VFC<DefaultPagesProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
