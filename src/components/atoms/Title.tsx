import React from "react";

import './title.scss';

interface Props {
    value: string;
}

const Title: React.FC<Props> = ({value}) => {

    return <h1 className="title">{value}</h1>

}

export default Title;

