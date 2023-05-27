//<div className="ProjectType"> with props for title and description

import React from 'react';
import './ProjectTypeCard.css';
import ProjectCard from './ProjectCard.js';

function ProjectTypeCard(props) {
    return (
        <div className="ProjectType">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default ProjectTypeCard;

