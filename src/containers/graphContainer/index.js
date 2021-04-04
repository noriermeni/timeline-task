import React, { useState, useRef, useEffect } from 'react';
import SvgGraphComponents from '../../components/svgGraphComponents'
import "./style.scss"

// import Scissors from '../../assets/icons/scissors.svg'

const GraphContainer = (props) => {
    const [ phases, setPhases ] = useState(props.phases) 
    const [ channels, setChannels ] = useState(props.channels)
    const [ horizontalLines, setHorizontalLines] = useState([])

    return (
        <div 
            className="graphContainer"
        >
            <SvgGraphComponents 
                svgTimeLengths={props.svgTimeLengths}
                svgTimeName={props.svgTimeName}
                beatsLength={props.beatsLength}
                phases={phases}
                channels={channels}
            />
        </div>
    );
}

export default GraphContainer