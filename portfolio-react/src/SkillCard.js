//Has display element, description, and sub skills
import React from 'react';
import './SkillCard.css';

function SkillCard(props) {
    return (
        <div className="SkillCard">
            <div className='SkillFlex'>
                <div className='displayEl'>{props.displayElement}</div>
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