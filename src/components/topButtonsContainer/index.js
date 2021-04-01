import React, { useState } from 'react';
import "./style.scss"

import TopButton from '../topButton/index'
import AddButton from '../addButton/index'

const TopButtonsContainer = () => {
    const [ data, useData ] = useState(
        [
            {
                id: 0,
                title: 'Speed',
                color: '#EEAD49'
            },
            {
                id: 1,
                title: 'Channel A',
                color: '#CB4B5A'
            },
            {
                id: 2,
                title: 'Channel B',
                color: '#75308E'
            },
            {
                id: 3,
                title: 'Channel C',
                color: '#30638E'
            },
            {
                id: 4,
                title: 'Channel C',
                color: '#008775'
            },
        ]
    )

    return (
        <div className="top_buttons_container">
            <p className="top_buttons_title">Selected Channels</p>
            <div className="top_buttons_right_container">
                {React.Children.toArray
                    (data.map(item =>
                        <TopButton data={item}/>
                    ))
                }
                <AddButton />
            </div> 
        </div>
    );
}

export default TopButtonsContainer