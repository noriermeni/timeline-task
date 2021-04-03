import React, { useState } from 'react';
import BottomElement from '../../components/bottomElement'
import "./style.scss"

const BottomContainer = (props) => {

    return (
        <div className="bottom_container">
            { React.Children.toArray (
                props.timePhases.map(phase =>
                    <BottomElement
                        phase={phase}
                        removePhaseElement={ () => props.removePhaseElement(phase.phaseId) }
                        onChangePhaseElements={ (phaseId, startPhase) => props.onChangePhaseElements(phaseId, startPhase) }
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