import React from "react";
import { Navigate, useNavigate } from "react-router";

import './link.scss';

interface Props {
    value: string;
    href: string;
    className?: string;
    link?: string;
}

const Link: React.FC<Props> = ({value, href, className, link}) => {

    const navigate = useNavigate()

    return (
    
        <a href={href} className={`link ${className}`} onClick={() => link && navigate(link)}>{value}</a>
        
    )

}

export default Link;