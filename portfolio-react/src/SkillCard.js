//Has display element, description, and sub skills
import React, { useEffect, useState } from 'react';
import './SkillCard.css';
import TechListLogos from './TechListLogos.json';
import TechComp from './TechComp';

function SkillCard(props) {
    const [backgroundImage, setBackgroundImage] = useState(null)
    useEffect(() => {
        if(props.backgroundImage){
            setBackgroundImage(props.backgroundImage);
        } else if(props.skillBackground){
            if(props.skill){
                let defaultImg = "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/description/fill1/48px.svg";
                let imgSrc = TechListLogos[props.skill.toLowerCase().replace(".", "")]?TechListLogos[props.skill.toLowerCase().replace(".", "")]:defaultImg;
                setBackgroundImage(imgSrc);
            } else{
                console.warn("SkillCard has skillBackground prop but no skill prop");
            }
        }
    }, []);
    return (
        <div className="SkillCard">
            <div className='SkillFlex'>
                {/*set background image*/}
                <div className='SkillBackground' style={{backgroundImage: `url(${backgroundImage})`}}></div>
                <div className='displayEl'>{props.displayElement!=null?props.displayElement:props.skill!=null?<TechComp tech={props.skill}></TechComp>:null}</div>
                {props.children?
                <div className='SubSkills'>
                    <h1>Frameworks/Libraries/APIs</h1>
                    {props.children}
                </div>:null}
            </div>
            
        </div>
    );
}

export default SkillCard;