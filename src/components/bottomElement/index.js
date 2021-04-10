import React, { useEffect, useState } from 'react';
import "./style.scss"

/**
 * Current Functionality of the Table:
 *
 *
 * Known bugs:
 *
 * TODO: Time validation is not ok need to change input type time.
 *
 */

const BottomElement = (props) => {
    const { phaseId, start, end, minStart, minEnd } = props.phase

    return (
        <div className="bottom_element_container">
            <div className="id_input_element">
                <p className="input_title">ID</p>
                <input 
                    type="text"
                    className="input" 
                    value={phaseId < 10 ? ("0" + phaseId).slice(-2) : phaseId} 
                    name="start" 
                    disabled
                />
            </div>
            <div className="input_element">
                <p className="input_title">START</p>
                <input 
                    type="time"
                    className="input" 
                    value={start} 
                    name="start"
                    onChange={ (e) => props.onChangePhaseElements({ name: e.target.name, value: e.target.value, phaseId: phaseId } )}
                />
            </div>
            <div className="input_element">
                <p className="input_title">END</p>
                <input 
                    type="time"
                    className="input" 
                    value={end} 
                    name="end" 
                    onChange={ (e) => props.onChangePhaseElements({ name: e.target.name, value: e.target.value, phaseId: phaseId } )}
                />
            </div>
            <div className="input_element">
                <p className="input_title">MIN START</p>
                <span className="inputSymbol">
                    <input 
                        type="text"
                        className="input" 
                        value={minStart} 
                        name="minStart"
                        onChange={ (e) => props.onChangePhaseElements({ name: e.target.name, value: e.target.value, phaseId: phaseId } )}
                    />
                </span>
            </div>
            <div className="input_element">
                <p className="input_title">MIN END</p>
                <span className="inputSymbol">
                    <input 
                        type="text"
                        className="input" 
                        value={minEnd} 
                        name="minEnd"
                        onChange={ (e) => props.onChangePhaseElements({ name: e.target.name, value: e.target.value, phaseId: phaseId } )}
                    />
                </span>
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