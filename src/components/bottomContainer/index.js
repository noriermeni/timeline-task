import React, { useState } from 'react';
import BottomElement from '../bottomElement'
import "./style.scss"

const BottomContainer = () => {
    const [ data, useData ] = useState (
        [
            {
                id: '01',
                start: '10:00',
                end: '10:06',
                minStart: '10%',
                minEnd: '90%',
            },
            {
                id: '02',
                start: '10:12',
                end: '10:18',
                minStart: '10%',
                minEnd: '90%',
            },
            {
                id: '03',
                start: '10:20',
                end: '10:26',
                minStart: '10%',
                minEnd: '90%',
            },
            {
                id: '04',
                start: '10:29',
                end: '10:35',
                minStart: '10%',
                minEnd: '90%',
            },
            {
                id: '05',
                start: '10:37',
                end: '10:43',
                minStart: '10%',
                minEnd: '90%',
            },
            {
                id: '06',
                start: '10:47',
                end: '10:53',
                minStart: '10%',
                minEnd: '90%',
            },
        ]
    )
    return (
        <div className="bottom_container">
            { React.Children.toArray (
                data.map(item => 
                    <BottomElement 
                        data={item}
                    />
                )
            )}
            <div className="add_bottom_button">
                <svg fill="#7C7C7C" width="20" height="20" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </div>
        </div>
    );
}

export default BottomContainer