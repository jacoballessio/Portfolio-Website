//A react component for a project card. Project card has a title, hover image, description, and link to the project page, as well as a list of technologies used(TechList component)

import React from 'react';
import './ProjectCard.css';
import { useRef, useEffect } from 'react';
import TechList from './TechList';

//import TechList from './TechList.js';

function ProjectCard(props) {
    
    return (
        <div className="ProjectCard">
            <h2>{props.title}</h2>
            <a href={props.link}>
                <p>Project page</p>
            </a>
            <a href={props.github}>
                Github repository
            </a>
            <p>{props.description}</p>
            {props.techList?<TechList techList={props.techList} />:null}
            {/*<TechList techList={props.techList} />*/}
        </div>
    );
}

export default ProjectCard;
