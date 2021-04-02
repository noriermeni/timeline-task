import React, { useEffect, useState } from 'react';
import "./style.scss"

const BottomElement = (props) => {
    const { phaseId, start, end, minStart, minEnd } = props.phase
    const [startPhase, setStartPhase ] = useState (start)

    const onChangePhaseElements = (e) => {
        setStartPhase(e.target.value)
        props.onChangePhaseElements(phaseId, e.target.value)
    }

    return (
        <div className="bottom_element_container">
            <div className="id_input_element">
                <p className="input_title">ID</p>
                <input 
                    className="input" 
                    value={phaseId} 
                    name="start" 
                    disabled
                />
            </div>
            <div className="input_element">
                <p className="input_title">START</p>
                <input 
                    className="input" 
                    value={startPhase} 
                    name="start"
                    onChange={onChangePhaseElements}
                />
            </div>
            <div className="input_element">
                <p className="input_title">END</p>
                <input 
                    className="input" 
                    value={end} 
                    name="end" 
                    onChange={props.onChangePhaseElements}
                />
            </div>
            <div className="input_element">
                <p className="input_title">MIN START</p>
                <input 
                    className="input" 
                    value={minStart} 
                    name="minstart"
                    onChange={props.onChangePhaseElements}
                />
            </div>
            <div className="input_element">
                <p className="input_title">MIN END</p>
                <input 
                    className="input" 
                    value={minEnd} 
                    name="minend"
                    onChange={props.onChangePhaseElements}
                />
            </div>
            <div className="remove_button_container">
                <span
                    className="remove_button"
                    onClick={props.removePhaseElement}
                >
                    <svg fill="#ffffff" enableBackground="new 0 0 413.348 413.348" height="10" viewBox="0 0 413.348 413.348" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" /></svg>
                </span>
            </div>
        </div>
    );
}

export default BottomElement