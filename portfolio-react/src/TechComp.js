//A component to display a technology. It takes a technology name, and displays the logo for that technology with the name right below it.
//The logo is stored in a json file(TechListLogos.json)

import React from 'react';
import './TechComp.css';
import TechListLogos from './TechListLogos.json';
import { useRef, useEffect, useState } from 'react';
import InvertableImg from './InvertableImg';

function TechComp(props) {
    let defaultImg = "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/description/fill1/48px.svg";
    let imgSrc = TechListLogos[props.tech.toLowerCase().replace(".", "")]?TechListLogos[props.tech.toLowerCase().replace(".", "")]:defaultImg;
    const imgRef = useRef(null);
    //if there is a space in the url, invert the image
    return (
        <div className="TechComp" style={props.style}>
            <InvertableImg ref={imgRef} src={imgSrc} alt={props.tech} />
            <h2 style={props.textStyle}>{props.tech}</h2>
        </div>
    );
}

export default TechComp;


/*check if logo is made up of mostly black pixels, and if so, invert the logo*/
//return original logo if not mostly black, inverted logo if mostly black
