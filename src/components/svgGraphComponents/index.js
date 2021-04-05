import React, { useState, useRef, useEffect } from 'react';
import "./style.scss"

const GraphContainer = (props) => {
    const svgRef = useRef()
    
    const [ phases, setPhases ] = useState(props.phases)
    const [ channels, setChannels ] = useState(props.channels)
    const [ polylines, setPolylines ] = useState([])
    const [ polylinesColors, setPolylinesColors ] = useState([])
    const [ numbers, setNumbers ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    useEffect(() => {
        setPhases(props.phases)
        setChannels(props.channels)
        generatePolylineArray()
    }, [ props.phases, props.channels ])


    const generatePolylineArray = () => {
        channels.map( channel => {
            let polylineString = '';
            
            channel?.beatings?.arrayX.map((coordX, i) => {
                return polylineString += `${coordX},${channel?.beatings?.arrayY[i]} `
            })
            setPolylines(oldArray => [...oldArray, polylineString])
        })

	}
        
    return (
        <svg 
            className="svgContainer"
            // ref=()
        >
            {console.log(polylines)}

            <g className="phaseDetails">
                { React.Children.toArray (
                    phases.map((phase, i) => 
                        <g className="bar" id="two">
                            <rect fill="#E2E2E2" height="200px" y={25} x={ 150 * (i + 1) + 0 } width={20}></rect>
                            <rect fill="#CBCBCB" height="200px" y={25} x={ 150 * (i + 1) + 20 } width={60}></rect>
                            <rect fill="#E2E2E2" height="200px" y={25} x={ 150 * (i + 1) + 80 } width={20}></rect>
                        </g>
                    )
                )}
            </g>

            <g className="horizontalLines">
                {React.Children.toArray (
                    numbers.map(item =>
                        <line stroke="#BBBBBB" strokeWidth="1" x1={92} x2={1014.51} y1={ 25 * item } y2={ 25 * item }></line>
                    )
                )}
            </g>
            
            <g className="verticalLines">
                { React.Children.toArray (
                    props.svgTimeLengths.map((element, i) => 
                        <line stroke="#BBBBBB" strokeWidth="1" x1={(76.9230769231 * ++i) + 14.51 } x2={(76.9230769231 * i) + 14.51 } y1="25" y2="225"></line>        
                    )
                )}
            </g>

            <g className="horizontalData">
                { React.Children.toArray (
                    props.svgTimeLengths.map((element, i) => 
                        <text style={{ fontSize: 12, fill: '#868686' }} x={ (76.9230769231 * ++i) } y="245">{element}</text>
                    )
                )}
                <text style={{ fontSize: 13, fill: '#868686' }} x="500" y="270" className="label-title">{props.svgTimeName}</text>
            </g>

            <g className="verticalData">
                <text style={{ fontSize: 12, fill: '#868686' }} x={60} y={225}>{props.beatsLength[0]}</text>
                <text style={{ fontSize: 12, fill: '#868686' }} x={60} y={30}>{props.beatsLength[1]}</text>
            </g>
                        
            <g className="breatingsContainer">
            { React.Children.toArray (
                polylines.map((polyline, i) => 
                    channels[i]?.isActive && <polyline stroke={channels[i]?.color} fill="none" points={polyline} />
                )
            )}
            </g>
          

        </svg>
    );
}

export default GraphContainer