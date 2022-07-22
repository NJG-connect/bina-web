import React from "react";

import "./link.scss";

interface Props {
  value?: string;
  href: string;
  className?: string;
  link?: string;
  htmlId?: string;
}

const Link: React.FC<Props> = ({
  value,
  href,
  className = "",
  htmlId = "",
}) => {
  return (
    <a href={href} id={htmlId} className={`atom-link ${className}`}>
      {value}
    </a>
  );
};

export default Link;
