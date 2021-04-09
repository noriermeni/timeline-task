import React, { useState, useRef, useEffect } from 'react';
import SvgGraphComponents from '../../components/svgGraphComponents'
import "./style.scss"

// import Scissors from

const GraphContainer = (props) => {
    return (
        <div 
            className="graphContainer"
        >
            <div className="contentGraph">
                <img className="scissorsIcon" src={'../../assets/icons/scissors.svg'} />
                <p>Selected Channel</p>
            </div>
            <div className="svgComponent">
                <SvgGraphComponents {...props} />
            </div>
        </div>
    );
}

export default GraphContainer