import React, { useState, useRef, useEffect } from 'react';
import SvgGraphComponents from '../../components/svgGraphComponents'
import "./style.scss"

// import Scissors from '../../assets/icons/scissors.svg'

const GraphContainer = (props) => {
    const [ horizontalLines, setHorizontalLines] = useState([])

    return (
        <div 
            className="graphContainer"
        >
            <SvgGraphComponents 
                svgTimeLengths={props.svgTimeLengths}
                svgTimeName={props.svgTimeName}
                beatsLength={props.beatsLength}
                phases={props.phases}
                channels={props.channels}
            />
        </div>
    );
}

export default GraphContainer