import React from "react";

type LinkProps = {
    url: string;
    children: React.ReactNode;
};

export const Link: React.VFC<LinkProps> = ({ url, children }) => {
    return <a href={url}>{children}</a>;
};
