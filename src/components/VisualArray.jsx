import { useEffect,useCallback, useRef, useState } from "react";
import './VisualArray.css'
function VisualArray() {
    const divRef = useRef(null);
    const height = 20;
    var array = useRef([]);
    var width = useRef(0);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    // Fisher–Yates (aka Knuth) Shuffle.
    function shuffleArray() {
        let currentIndex = array.current.length;

        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array.current[currentIndex], array.current[randomIndex]] = [
                array.current[randomIndex], array.current[currentIndex]];
        }
        forceUpdate();
        console.log(array.current);
    }

    function populateArray(){
        let count = 10;
        for (let i = 1; i <= count; i++) {
            array.current.push(i / count * height);
        }
        width.current = 100 / count;
        forceUpdate();
    }

    useEffect(() => {
        const clearDisplay = () => {
            while (divRef.current.lastChild != null) {
                divRef.current.removeChild(divRef.current.lastChild);
            }
        }

        const addDiv = (height) => {
            const div = document.createElement('div');
            div.style.height = `${height}rem`;
            div.style.width = `${width.current}%`;
            divRef.current.appendChild(div);
        }

        const showArray = () => {
            console.log(array.current);
            clearDisplay();
            array.current.forEach(item => {
                addDiv(item);
            });
        }

        showArray();
    });

    return (
        <div className='sorting-container'>
            <div className='array-container' ref={divRef}>
            </div>
            <div className='button-container'>
                <button type='button' onClick={shuffleArray}>Randomize</button>
                <button type='button' onClick={populateArray}>Populate</button>
            </div>
        </div>
    );
}

export default VisualArray;