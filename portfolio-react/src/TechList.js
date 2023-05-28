//Create component that accepts a list of technologies(as strings) and displays them as a horizontal flex box
//There will be a map of common programming languages/frameworks/technologies to their logos, and the component will display the logo for each technology in the list.
//map is stored in json file(TechListLogos.json)

import React from 'react';
import './TechList.css';
import TechListLogos from './TechListLogos.json';
import TechComp from './TechComp.js';

function TechList(props) {
    return (
        <div className="TechList">
            
            <h1>{props.title?props.title:"Technologies used"}</h1>
            <div className="TechListFlex">
                {props.techList.map((tech) => {
                    return (
                        <div key={tech}>
                            <TechComp textStyle={{fontSize: '10px'}} style={{transform: "Scale(0.8)"}} tech={tech} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TechList;
