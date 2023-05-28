//A react component for a project card. Project card has a title, hover image, description, and link to the project page, as well as a list of technologies used(TechList component)

import React from 'react';
import './ProjectCard.css';
import { useRef, useEffect } from 'react';
import TechList from './TechList.js';
import TechListLogos from './TechListLogos.json';
import InvertableImg from './InvertableImg';

//import TechList from './TechList.js';

function ProjectCard(props) {
    
    return (
        <div className="ProjectCard">
            <div className='ProjectTitleSection'>
                <div className="ProjectTitleLeft">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="ProjectTitleRight">
                    <a href={props.link} className="ProjectLink ProjectCardLink">
                        <p>Project page </p>
                        <InvertableImg src={"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/open_in_browser/fill1/48px.svg"} invert={true} alt="Project page" />
                    </a>
                    <a href={props.github} className='GithubLink ProjectCardLink'>
                        <p>Github repository</p>
                        <InvertableImg src={TechListLogos["github"].split(" ")[0]} invert={true} alt="Github repository" />
                    </a>
                </div>
            </div>
            {/* <p style={{fontSize: '12px'}}>Project type: {props.type}</p> italics*/}
            <p style={{fontSize: '12px', fontStyle: 'italic', marginTop: "15px"}}>Project type: {props.type}</p>
            {props.techList?<TechList techList={props.techList} />:null}
            {/*<TechList techList={props.techList} />*/}
        </div>
    );
}

export default ProjectCard;
