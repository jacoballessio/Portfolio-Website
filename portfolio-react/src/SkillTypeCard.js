//<div className="ProjectType"> with props for title and description

import React from 'react';
import './HolderBox.css';

function SkillTypeCard(props) {
    return (
        <div className="SkillType HolderBox">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default SkillTypeCard;

