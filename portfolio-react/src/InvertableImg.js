//react component that displays an image that can be inverted by passing a prop
import React, {useRef, useEffect, useState} from 'react';
//import './InvertableImg.css';

function InvertableImg(props) {
    const imgRef = useRef(null);
    const [src, setSrc] = useState(props.src);
    //useEffect(() => {
    useEffect(() => {
        if(src.includes(" invert")){
            if(!props.invert)
            {
                invert(src).then((newSrc) => {
                    setSrc(newSrc);
                });
            } else {
                setSrc(src.replace(" invert", ""));
            }
            //set source to inverted image. Invert function is async
            
        } else if(props.invert){
            invert(src).then((newSrc) => {
                setSrc(newSrc);
            });
        };
        setSrc(src.replace(" invert", ""));
    }, []);

    
    return (
        <div className="InvertableImg">
           <img ref={imgRef} src={src} alt={props.alt} className={props.invert?"invert":""} />
        </div>
    );
}

async function invert(imgSrc){
    imgSrc=imgSrc.replace(" invert", "");
    let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.src = imgSrc;
        img.crossOrigin = "Anonymous";
        //promise
        return await new Promise((resolve, reject) => {
            img.onload = ()=> {
                try{
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
                    resolve(imgSrc);
                }catch(e){
                    reject(e);
                }
            }
        });
   
}


export default InvertableImg;