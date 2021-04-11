import React, { useEffect, useState } from 'react';
import "./style.scss"

/**
 * Current Functionality of the Table:
 *
 *
 * Known bugs:
 *
 * TODO: Time validation is not ok need to change input type time.
 * TODO: Percents input for minEnd and minStart Validation.
 *
 */

const BottomElement = (props) => {
    const { phaseId, start, end, minStart, minEnd } = props.phase;

    const onChangePhaseElements = (details) => {
        props.onChangePhaseElements(details)
    }

    return (
        <div className="bottomElementContainer">
            <div className="idInputElement">
                <p className="inputTitle">ID</p>
                <input 
                    type="text"
                    className="input" 
                    value={phaseId < 10 ? ("0" + phaseId).slice(-2) : phaseId} 
                    name="start" 
                    disabled
                />
            </div>
            <div className="inputElement">
                <p className="inputTitle">START</p>
                <input // TODO: Not Supported in Internet Explorer need to make validation with input text
                    type="time"
                    className="input" 
                    value={start} 
                    name="start"
                    onChange={ (e) => onChangePhaseElements({ name: e.target.name, value: e.target.value, phaseId: phaseId } )}
                />
            </div>
            <div className="inputElement">
                <p className="inputTitle">END</p>
                <input // TODO: Not Supported in Internet Explorer need to make validation with input text
                    type="time"
                    className="input" 
                    value={end} 
                    name="end" 
                    onChange={ (e) => onChangePhaseElements({ name: e.target.name, value: e.target.value, phaseId: phaseId } )}
                />
            </div>
            <div className="inputElement">
                <p className="inputTitle">MIN START</p>
                <span className="inputSymbol">
                    <input 
                        type="number" // TODO: Need a Validation for percents
                        min="0"
                        max="100"
                        className="input" 
                        value={minStart} 
                        name="minStart"
                        onChange={ (e) => onChangePhaseElements({ name: e.target.name, value: e.target.value, phaseId: phaseId } )}
                    />
                </span>
            </div>
            <div className="inputElement">
                <p className="inputTitle">MIN END</p>
                <span className="inputSymbol">
                    <input
                        type="number" // TODO: Need a Validation for percents
                        min="0"
                        max="100"
                        className="input" 
                        value={minEnd} 
                        name="minEnd"
                        onChange={ (e) => onChangePhaseElements({ name: e.target.name, value: e.target.value, phaseId: phaseId } )}
                    />
                </span>
            </div>
            <div className="removeButtonContainer">
                <span
                    className="removeButton"
                    onClick={props.removePhaseElement}
                >
                    <svg fill="#ffffff" enableBackground="new 0 0 413.348 413.348" height="10" viewBox="0 0 413.348 413.348" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" /></svg>
                </span>
            </div>
        </div>
    );
}

export default BottomElement