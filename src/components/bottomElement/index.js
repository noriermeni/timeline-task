import React, { useState } from 'react';
import "./style.scss"

const BottomElement = (props) => {
    
    const { id, start, end, minStart, minEnd } = props.data

    return (
        <div className="bottom_element_container">
            <div className="id_input_element">
                <p className="input_title">ID</p>
                <input className="input" defaultValue={id} name="start" disabled/>
            </div>
            <div className="input_element">
                <p className="input_title">START</p>
                <input className="input" defaultValue={start} name="start" />
            </div>
            <div className="input_element">
                <p className="input_title">END</p>
                <input className="input" defaultValue={end} name="end" />
            </div>
            <div className="input_element">
                <p className="input_title">MIN START</p>
                <input className="input" defaultValue={minStart} name="minstart" />
            </div>
            <div className="input_element">
                <p className="input_title">MIN END</p>
                <input className="input" defaultValue={minEnd} name="minend" />
            </div>
            <div className="remove_button_container">
                <span className="remove_button">
                    <svg fill="#ffffff" enableBackground="new 0 0 413.348 413.348" height="10" viewBox="0 0 413.348 413.348" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
                </span>
            </div>
        </div>
    );
}

export default BottomElement