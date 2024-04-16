import { useEffect, useCallback, useRef, useState } from "react";
import './VisualArray.css'
function VisualArray() {
    const divRef = useRef(null);
    const countRef = useRef(null);
    const speedRef = useRef(null);
    const height = 20;
    var left = useRef(-1);
    var right = useRef(-1);
    var array = useRef([]);
    var width = useRef(0);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    function swap() {
        if (left.current < 0 || left.current >= array.current.length) {
            return;
        }

        if (right.current < 0 || right.current >= array.current.length) {
            return;
        }

        const temp = array.current[left.current];
        array.current[left.current] = array.current[right.current];
        array.current[right.current] = temp;
        left.current = -1;
        right.current = -1;
        forceUpdate();
    }

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
    }

    function populateArray() {
        array.current = [];
        let count = countRef.current.value;
        for (let i = 1; i <= count; i++) {
            array.current.push(i / count * height);
        }
        width.current = 100 / count;
        forceUpdate();
    }

    function quickSortWrapper() {
        quickSort(0,array.current.length-1);
    }

    async function quickSort(p,r){
        if(p<r){
            const q = await partition(p,r);
            await quickSort(p,q-1);
            await quickSort(q+1,r);
        }
    }

    async function partition(p, r) {
        let x = array.current[p];
        let i = p;
        for (let j = p + 1; j <= r; j++) {
            if (array.current[j] <= x) {
                i++;
                left.current = i;
                right.current = j;
                let delayres = await delay(speedRef.current.value);
                swap();
            }
        }
        left.current = i;
        right.current = p;
        let delayres = await delay(speedRef.current.value);
        swap();
        return i;
    }

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    async function bubbleSort() {
        const n = array.current.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array.current[j] > array.current[j + 1]) {
                    left.current = j;
                    right.current = j + 1;
                    let delayres = await delay(speedRef.current.value);
                    swap();
                }
            }
        }
    }

    useEffect(() => {
        const clearDisplay = () => {
            while (divRef.current.lastChild != null) {
                divRef.current.removeChild(divRef.current.lastChild);
            }
        }

        const addDiv = (height, className) => {
            const div = document.createElement('div');
            div.style.height = `${height}rem`;
            div.style.width = `${width.current}%`;
            div.className = className;
            divRef.current.appendChild(div);
        }

        const showArray = () => {
            clearDisplay();
            for (let i = 0; i < array.current.length; i++) {
                var className;
                switch (i) {
                    case left.current:
                        className = 'left';
                        break;
                    case right.current:
                        className = 'right';
                        break;
                    default:
                        className = 'none';
                }
                addDiv(array.current[i], className);
            }
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
                <button type='button' onClick={bubbleSort}>BubbleSort</button>
                <button type='button' onClick={quickSortWrapper}>quickSort</button>
            </div>
            <div className='slider-div'>
                <input type='range' min='10' max='1000' ref={countRef}></input>
                <input type='range' min='0' max='1000' ref={speedRef}></input>
            </div>
        </div>
    );
}

export default VisualArray;