import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {

};

const getRandomColor = () => {
    const COLOR_LIST = ['orange', 'green', 'blue', 'red', 'black'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox(props) {
    const [color, setcolor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'red';
        return initColor;
    });
    const handleBoxClick = () => {
        //get random color -> set color
        const newColor = getRandomColor();
        setcolor(newColor);

        localStorage.setItem('box-color', newColor)
    }
    return (
        <div>
            <div className="color-box" style={{ backgroundColor: color }}>
            </div>
            <button onClick={handleBoxClick}>Change color</button>
        </div>
    );
}

export default ColorBox;