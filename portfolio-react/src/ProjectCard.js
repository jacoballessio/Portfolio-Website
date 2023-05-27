//A react component for a project card. Project card has a title, hover image, description, and link to the project page, as well as a list of technologies used(TechList component)

import React from 'react';
import './ProjectCard.css';
import { useRef, useEffect } from 'react';

//import TechList from './TechList.js';

function ProjectCard(props) {
    //show the image when the card is hovered over, attached to the cursor


    //position the hover image to the right of the cursor
    //get x and y coordinates of the cursor
    const hoverImageRef = useRef();

    const getMousePosition = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        // set x and y coordinates of the hover image to the cursor coordinates
        hoverImageRef.current.style.left = (x-20)+ 'px';
        hoverImageRef.current.style.top =( y-600) + 'px';
        hoverImageRef.current.style.height = '200px';
        
    }

    useEffect(() => {
        document.addEventListener('mousemove', getMousePosition);

    }, []);
    //call the showHoverImage function when the card is hovered over
    return (
        <div className="ProjectCard" onMouseOver={()=>{hoverImageRef.current.style.display = 'block'}} onMouseOut={()=>{hoverImageRef.current.style.display = 'none'}}>
            <h2>{props.title}</h2>
            <a href={props.link}>
                <img ref={hoverImageRef} src={props.image} style={{display:'none'}} alt={props.title} />
            </a>
            <p>{props.description}</p>
            {/*<TechList techList={props.techList} />*/}
        </div>
    );
}

export default ProjectCard;
