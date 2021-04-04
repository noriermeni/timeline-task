import React, { useState, useRef, useEffect } from 'react';
import "./style.scss"

const GraphContainer = (props) => {
    const svgRef = useRef()
    const [ numbers, setNumbers ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
        
    return (
        <svg 
            className="svgContainer"
            // ref=()
        >
            { React.Children.toArray (
                props.phases.map((phase, i) => 
                    <g className="bar" transform={"translate(" + 150 * (i + 1) + ",0)"}>
                        <rect fill="#E2E2E2" height="200px" y={25} x="0" width="20"></rect>
                        <rect fill="#CBCBCB" height="200px" y={25} x={20} width="60"></rect>
                        <rect fill="#E2E2E2" height="200px" y={25} x={80} width="20"></rect>
                    </g>
                )
            )}

            <g className="horizontalLines">
                {React.Children.toArray (
                    numbers.map(item =>
                        <line stroke="#BBBBBB" strokeWidth="1" x1={92} x2={1014.51} y1={ 25 * item } y2={ 25 * item }></line>
                    )
                )}
            </g>
            
            <g>
                { React.Children.toArray (
                    props.svgTimeLengths.map((element, i) => 
                        <line stroke="#BBBBBB" strokeWidth="1" x1={(76.9230769231 * ++i) + 14.51 } x2={(76.9230769231 * i) + 14.51 } y1="25" y2="225"></line>        
                    )
                )}
            </g>

            <g>
                { React.Children.toArray (
                    props.svgTimeLengths.map((element, i) => 
                        <text style={{ fontSize: 12, fill: '#868686' }} x={ (76.9230769231 * ++i) } y="245">{element}</text>
                    )
                )}
                <text style={{ fontSize: 13, fill: '#868686' }} x="500" y="270" className="label-title">{props.svgTimeName}</text>
            </g>

            <g className="labels y-labels">
                <text style={{ fontSize: 12, fill: '#868686' }} x={60} y={225}>{props.beatsLength[0]}</text>
                <text style={{ fontSize: 12, fill: '#868686' }} x={60} y={30}>{props.beatsLength[1]}</text>
            </g>
        </svg>
    );
}

export default GraphContainer