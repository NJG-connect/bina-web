import React from "react";

import './title.scss';

interface Props {
    value: string;
    htmlId?: string;
}

const Title: React.FC<Props> = ({value, htmlId = ""}) => {

    return <div className="title"><h1 id={htmlId}>{value}</h1></div>

}

export default Title;

