type LinkProps = {
    url: string;
    children: ChildNode;
};

export const Link: React.VFC<LinkProps> = ({ url, children }) => {
    return <a href={url}>{children}</a>;
};
