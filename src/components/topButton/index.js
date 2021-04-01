import React from 'react';
import "./style.scss"

const TopButton = (props) => {
    let { color, title } = props.data
    return (
        <div className="top_button" style={{ backgroundColor: color }}>
            <span className="top_button_icon">
                <svg id="Capa_1" enableBackground="new 0 0 413.348 413.348" height="18" viewBox="0 0 413.348 413.348" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
            </span>
            <p>{title}</p>
        </div>
    );
}

export default TopButton