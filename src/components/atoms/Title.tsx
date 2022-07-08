import React from "react";

import './title.scss';

interface Props {
    value: string;
}

const Title: React.FC<Props> = ({value}) => {

    return <div className="title"><h1>{value}</h1></div>

}

export default Title;

