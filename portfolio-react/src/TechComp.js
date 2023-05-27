//A component to display a technology. It takes a technology name, and displays the logo for that technology with the name right below it.
//The logo is stored in a json file(TechListLogos.json)

import React from 'react';
import './TechComp.css';
import TechListLogos from './TechListLogos.json';
import { useRef, useEffect } from 'react';

function TechComp(props) {
    let defaultImg = "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/description/fill1/48px.svg";
    let imgSrc = TechListLogos[props.tech.toLowerCase().replace(".", "")]?TechListLogos[props.tech.toLowerCase().replace(".", "")]:defaultImg;
    const imgRef = useRef(null);
    //if there is a space in the url, invert the image
    useEffect(() => {
        if(imgSrc.includes(" invert")){
        
            imgSrc = imgSrc.replace(" invert", "");
            //define imgRef
            
            //invert image colors
            //create canvas
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            let img = new Image();
            img.src = imgSrc;
            img.crossOrigin = "Anonymous";
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                let data = imageData.data;
                for(let i = 0; i < data.length; i+=4){
                    data[i] = 255 - data[i];
                    data[i+1] = 255 - data[i+1];
                    data[i+2] = 255 - data[i+2];
                }
                ctx.putImageData(imageData, 0, 0);
                imgSrc = canvas.toDataURL();
                console.log(imgSrc);
                imgRef.current.src = imgSrc;
            }
    
        }
    }, []);
    return (
        <div className="TechComp" style={props.style}>
            
            <img ref={imgRef} src={imgSrc} alt={props.tech} />
            <h2 style={props.textStyle}>{props.tech}</h2>
        </div>
    );
}

export default TechComp;


/*check if logo is made up of mostly black pixels, and if so, invert the logo*/
//return original logo if not mostly black, inverted logo if mostly black
