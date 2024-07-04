import React, { ReactNode } from "react";

interface CustomLinkAProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const CustomLinkA: React.FC<CustomLinkAProps> = ({
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default CustomLinkA;
