import React from 'react';
import "./style.scss"

const TopButton = (props) => {
    let { color, title, isActive } = props.channel

    return (
        <div
            className="top_button"
            style={{ backgroundColor: color, marginBottom: !isActive && 15 }}
        >
            { isActive ?
                <span
                    className="top_button_icon"
                    onClick={ () => props.disableChannelElement() }
                >
                    <svg enableBackground="new 0 0 413.348 413.348" height="18" viewBox="0 0 413.348 413.348" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/>
                    </svg>
                </span>
            :
                <span
                    className="top_button_icon"
                    onClick={ () => props.enableChannelElement() }
                >
                    <svg fill="#000" width="18" height="18" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </span>
            }
            <p>{title}</p>
        </div>
    );
}

export default TopButton