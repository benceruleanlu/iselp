import React, { ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  className,
  children,
}) => {
  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1));
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default CustomLink;
