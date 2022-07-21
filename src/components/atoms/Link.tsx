import React from "react";
import { Navigate, useNavigate } from "react-router";

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
  link,
  htmlId = "",
}) => {
  const navigate = useNavigate();

  return (
    <a
      href={href}
      id={htmlId}
      className={`atom-link ${className}`}
      onClick={() => link && navigate(link)}
    >
      {value}
    </a>
  );
};

export default Link;
