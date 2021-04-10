import React, { useState, useRef, useEffect } from 'react';
import SvgGraphComponents from '../../components/svgGraphComponents'
import "./style.scss"

/**
 * Current Functionality of the Table:
 *
 *
 * Known bugs:
 *
 *
 */

const GraphContainer = (props) => {
    const [ listOfPhaseIdToCut, setListOfPhaseIdToCut ] = useState([])
    const [ cutter, setCutter ] = useState(true)

    const cutElementOfPhases = (phaseId) => {
        listOfPhaseIdToCut.find(e => e === phaseId ) ?
            setListOfPhaseIdToCut(listOfPhaseIdToCut.filter((e)=>(e !== phaseId)))
        :
            setListOfPhaseIdToCut(oldListOfPhaseIdToCut => [...oldListOfPhaseIdToCut, phaseId])
    }

    const enableElementOfPhases = () => {
        props.enableElementOfPhases(listOfPhaseIdToCut)
        setCutter(false)
    }

    const resetPhases = () => {
        props.resetPhases()
        setCutter(true)
        setListOfPhaseIdToCut([])
    }

    return (
        <div className="graphContainer">
            <div className="contentGraph">
                {cutter ?
                    <img
                        className="scissorsIcon"
                        src={'../../assets/icons/scissors.svg'}
                        onClick={() => enableElementOfPhases()}
                    />
                    :
                    <img
                        className="scissorsIcon"
                        src={'../../assets/icons/reset.svg'}
                        onClick={() => resetPhases()}
                    />
                }
                <p>Selected Channel</p>
            </div>
            <div className="svgComponent">
                <SvgGraphComponents
                    {...props}
                    cutElementOfPhases={(phaseId) => cutElementOfPhases(phaseId)}
                />
            </div>
        </div>
    );
}

export default GraphContainer