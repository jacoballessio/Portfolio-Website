//React component that takes in prop "tech" and displays the logo for that technology
//TechListLogos.json

import React from 'react';
import TechListLogos from './TechListLogos.json';
import InvertableImg from './InvertableImg';

function TechImg(props) {
    let defaultImg = "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/description/fill1/48px.svg";
    let imgSrc = TechListLogos[props.tech.toLowerCase().replace(".", "")]?TechListLogos[props.tech.toLowerCase().replace(".", "")]:defaultImg;
    return (
        <InvertableImg invert={props.invert} src={imgSrc} alt={props.tech} />
    );
}

export default TechImg;