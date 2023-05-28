//Card that displays education information. Name of school, degree, and dates attended.

import React from 'react';
import './HolderBox.css';
import './EducationCard.css';

function EducationCard(props) {
    return (
        <div className="EducationCard HolderBox">
            <h2>{props.school}</h2>
            <p>{props.description}</p>
            <p><p style={{fontSize: '12px', fontStyle: 'italic', marginTop: "15px", textDecoration:"underline"}}>Degree:</p>{props.degree}</p>
            <p><p style={{fontSize: '12px', fontStyle: 'italic', marginTop: "15px", textDecoration:"underline"}}>Dates Attended:</p>{props.datesAttended}</p>
            {props.graduationDate?<p><p style={{fontSize: '12px', fontStyle: 'italic', marginTop: "15px", textDecoration:"underline"}}>{props.stillAttending?"Expected ":null}Graduation Date:</p>{props.graduationDate}</p>:null}
        </div>
    );
}

export default EducationCard;
