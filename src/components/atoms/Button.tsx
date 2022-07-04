import React from "react";

import './button.scss';

interface Props {
    value: string;
    className: "nav-button" | "contact-button";
    onClick: () => void;
}

const Button: React.FC<Props> = ({value, className, onClick = () => {} }) => {

    return (
        <div className={`button ${className}`} onClick={onClick}>{value}</div>
    )

}

export default Button;