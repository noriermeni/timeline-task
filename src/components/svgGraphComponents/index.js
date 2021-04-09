import React, { useState, useEffect } from 'react';
import "./style.scss"

const SvgGraphComponents = (props) => {
    const [ phases, setPhases ] = useState(props.phases)
    const [ channels, setChannels ] = useState(props.channels)
    const [ beatingLines, setBeatingLines ] = useState([])
    const [ verticalLines, setVerticalLines ] = useState([])
    const [ numbers, setNumbers ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [ startEnd, setStartEnd ] = useState({ start: '', end: '' })
    const [ marginOfPhase, setMarginOfPhase ] = useState([])

    useEffect(() => {
        setPhases(props.phases)
        setChannels(props.channels)
        generatePolylineArray()
    }, [ props.phases, props.channels ])

    useEffect(() => {
        phases.length && calculateTimeZones()
    }, [ phases ]);

    useEffect(() => {
        calculateMarginOfPhase();
    }, [ startEnd ])

    // Find Starter time and End time - START
    const findPhasesStartEndTime = () => {
        return ({
            start: phases.sort((a, b) => (a.start < b.start) ? -1 : ((a.start > b.start) ? 1 : 0))[0].start.split(":"),
            end: phases.sort((a, b) => (a.end < b.end) ? -1 : ((a.end > b.end) ? 1 : 0))[phases.length - 1].end.split(":"),
        })
    }
    // Find Starter time and End time - END

    // Sort Times and return minutes between start time and end time - START
    const calculateTimeZones = () => {
        let listOfTimes = [];
        let start = findPhasesStartEndTime().start;
        let end = findPhasesStartEndTime().end;
        start[1] = parseInt(start[1]) < 10 ? 0 : parseInt(start[1]) < 20 ? 10 : parseInt(start[1]) < 30 ? 20 : parseInt(start[1]) < 40 ? 30 : parseInt(start[1]) < 50 ? 40 : parseInt(start[1]) < 60 && 50;
        let ora = parseInt(start[0]);
        let minutes = parseInt(start[1]);
        for( let i = 0; i <= (( parseInt(end[0]) - parseInt(start[0]) ) * 60 ) + parseInt(end[1]) - parseInt(start[1]) + 10; i += 5 ) {
            if (minutes >= 60) {
                ora++;
                minutes = 0;
            }
            listOfTimes.push(ora + ':' + minutes)
            minutes = minutes + 5;
        }
        setStartEnd({
            start: listOfTimes[0],
            end: listOfTimes[listOfTimes.length - 1]
        });
        setVerticalLines( [...listOfTimes] );
    };
    // Sort Times and return minutes between start time and end time - END

    // Coordinate generation for Beating Lines - START
    const generatePolylineArray = () => {
        channels.map( channel => {
            let polylineString = '';
            channel?.beatings?.arrayX.map((coordinateX, i) => polylineString += `${coordinateX},${channel?.beatings?.arrayY[i]} ` );
            setBeatingLines(oldArray => [...oldArray, polylineString]);
        });
	};
    // Coordinate generation for Beating Lines - END

    // NoDataFound called if dont have phases - START
    const noDataFound = () => {
        return <div className="noDataContainer">
                <p>Sorry! No data found.</p>
            </div>;
    };
    // NoDataFound called if dont have phases - END

    // Created to Calculate position of Phases in Diagram - START
    const calculateMarginOfPhase = () => {
        if (calculateWidthForEachSecond()) {
            let marginPhases = [];
            { React.Children.toArray(
                phases.map(phase => {
                    let actualStart = phase.start.split(":");
                    let actualEnd = phase.end.split(":");
                    let findActualWidth = ((((actualEnd[0] - actualStart[0]) * 60) + (actualEnd[1] - actualStart[1])) * 60) * calculateWidthForEachSecond()
                    marginPhases.push({
                        findActualWidth,
                        marginWidth: ((((actualStart[0] - splitMinMaxTime().start[0]) * 60) + (actualStart[1] - splitMinMaxTime().start[1])) * 60) * calculateWidthForEachSecond(),
                        minStartWidth: findActualWidth * (phase.minStart / 100),
                        minEndWidth: findActualWidth * (phase.minEnd / 100),
                        minLastWidth: findActualWidth * (( 100 - phase.minEnd) / 100),
                    })
                })
            )}
            setMarginOfPhase([...marginPhases])
        }
    };
    // Created to Calculate position of Phases in Diagram - START

    // Return Total Width of Coordinates - START
    const calculateWidthOfHorizontalLines = () => {
        return ((1000 / verticalLines.length - 1 ) * verticalLines.length) - (1000 / verticalLines.length - 1);
    };
    // Return Total Width of Coordinates - END

    // Calculate width for second - START
    const calculateWidthForEachSecond = () => {
        return calculateWidthOfHorizontalLines() / calculateTotalSeconds();
    };
    // Calculate width for second - END

    // Find Minimal and Maximal for Time - START
    const splitMinMaxTime = () => {
        return ({
            start: startEnd.start.split(":"),
            end: startEnd.end.split(":"),
        });
    };
    // Find Minimal and Maximal for Time - END

    // Calculate total seconds - START
    const calculateTotalSeconds = () => {
        return ((((parseInt(splitMinMaxTime().end[0]) - parseInt(splitMinMaxTime().start[0])) * 60) + parseInt(splitMinMaxTime().end[1]) - parseInt(splitMinMaxTime().start[1])) * 60);
    };
    // Calculate total seconds - END

    return (
        phases.length ?
            <svg
                version="1.1"
                className="svgContainer"
                width={calculateWidthOfHorizontalLines() ? calculateWidthOfHorizontalLines() + 50 : '100%'}
            >
                <g>
                    <g className="phaseDetails">
                        {
                            React.Children.toArray (
                                marginOfPhase && marginOfPhase.map((phase, i) =>
                                    <g className="bar" id="two">
                                        <rect fill="#E2E2E2" height="200px" y={25} x={phase.marginWidth + 25} width={phase.minStartWidth} />
                                        <rect fill="#CBCBCB" height="200px" y={25} x={phase.marginWidth + phase.minStartWidth + 25} width={phase.minEndWidth} />
                                        <rect fill="#E2E2E2" height="200px" y={25} x={phase.marginWidth + phase.minEndWidth + 25} width={phase.minLastWidth} />
                                    </g>
                                )
                            )
                        }
                    </g>
                    <g className="horizontalLines">
                        {React.Children.toArray (
                            verticalLines.length && numbers && numbers.map(item =>
                                <line stroke="#BBBBBB" strokeWidth="1" x1={25} x2={calculateWidthOfHorizontalLines() + 25} y1={25 * item} y2={25 * item}/>
                            )
                        )}
                    </g>

                    <g
                        className="verticalLines"
                    >
                        { React.Children.toArray (
                            verticalLines?.map((element, i) =>
                                <line stroke="#BBBBBB" strokeWidth="1" x1={((1000 / verticalLines.length - 1 ) * i) + 25 } x2={((1000 / verticalLines.length - 1) * i) + 25 } y1="25" y2="225"/>
                            )
                        )}
                    </g>

                    <g className="verticalLinesData">
                        { React.Children.toArray (
                            verticalLines.map((element, i) =>
                                <text style={{ fontSize: 12, fill: '#868686' }} x={ ( ((1000 / verticalLines.length - 1) * i) - 13 + 25) } y="245">{element}</text>
                            )
                        )}
                        <text style={{ fontSize: 13, fill: '#868686' }} x="500" y="270" className="label-title">{props.svgTimeName}</text>
                    </g>

                    <g className="horizontalLinesData">
                        <text style={{ fontSize: 12, fill: '#868686' }} x={10} y={225}>{props.beatsLength[0]}</text>
                        <text style={{ fontSize: 12, fill: '#868686' }} x={10} y={30}>{props.beatsLength[1]}</text>
                    </g>

                    <g className="beatingsContainer">
                        { React.Children.toArray (
                            beatingLines.map((polyline, i) =>
                                channels[i]?.isActive && <polyline stroke={channels[i]?.color} fill="none" points={polyline} />
                            )
                        )}
                    </g>
                </g>
            </svg>
        :
            noDataFound()
    );
}

export default SvgGraphComponents;