import React from 'react';
import "./style.scss"

function AddButton(props) {
    return (
        <span
            className="add_button_container"
            onClick={props.showModal}
        >
            <svg fill="#ffffff" width="20" height="20" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        </span>
    );
}

export default AddButton