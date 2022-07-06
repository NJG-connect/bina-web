import React from "react";

import './button.scss';

interface Props {
    value: string;
    className: "nav-button" | "contact-button";
    onClick: () => void;
    id?: "navbar-button" | "contact-button";
}

const Button: React.FC<Props> = ({value, className, onClick = () => {} }, id = "") => {

    console.log(id);
    

    return (
        <div id={`${id}`} className={`button ${className}`} onClick={onClick}>{value}</div>
    )

}

export default Button;