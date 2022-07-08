import React from "react";
import { Navigate, useNavigate } from "react-router";

import './link.scss';

interface Props {
    value: string;
    href: string;
    className?: string;
    link?: string;
    htmlId?: string;
    key?: string;
    children?: React.ReactNode;
}

const Link: React.FC<Props> = ({value, href, className = "", link, htmlId = "", key = "", children}) => {

    const navigate = useNavigate()

    return (
    
        <a href={href} id={htmlId} key={key} className={`Link ${className}`} onClick={() => link && navigate(link)}>{children ? children : value}</a>
        
    )

}

export default Link;