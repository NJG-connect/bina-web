import React from "react";
import { useNavigate } from "react-router";

import './link.scss';

interface Props {
    value: string;
    link: string;
    href?: string;
}

const Link: React.FC<Props> = ({value, link, href}) => {

    const navigate = useNavigate()

    return (
    
        <div className="link" onClick={() => navigate(link)}>{value}</div>
        
    )

}

export default Link;