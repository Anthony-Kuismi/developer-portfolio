import { useRef } from "react";
import './VisualArray.css'
export default function VisualArray(){
    const divRef = useRef(null);
    const count = 100;
    const height = 20; 
    var array = [];
    for(let i=1; i <= count; i++){
        array.push(i/count * height);
    }
    var width = 100/array.length;
    
    return(
        <div className='array-container'ref={divRef}>
            {array.map((item) =>{
                return <div key={item}style={{width:`${width}%`,height: `${item}rem`}}></div>
            })}
        </div>
    );
}