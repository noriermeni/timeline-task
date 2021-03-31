import React from 'react';
import "./style.scss"

function AddButton() {
    return (
        <div className="add_button_container">
           <svg width={20} height={20} stroke={'#000000'} viewBox="0 0 100 100">
                <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
                <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="5"></line>
            </svg>
        </div>
    );
}

export default AddButton