import React, { useState } from 'react';
import "./style.scss"

import BottomElement from '../../components/bottomElement'
import ModalPhases from '../../modals/modalPhases';

/**
 * Current Functionality of the Table:
 *
 *
 * Known bugs:
 *
 *
 */

const BottomContainer = (props) => {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <div className="bottomContainer">
                { React.Children.toArray (
                    props.timePhases.map(phase =>
                        <BottomElement
                            phase={phase}
                            removePhaseElement={ () => props.removePhaseElement(phase.phaseId) }
                            onChangePhaseElements={ (e) => props.onChangePhaseElements(e) }
                        />
                    )
                )}
                <div 
                    className="addBottomButton"
                    onClick={ () => setShowModal(true) }
                >
                    <svg fill="#7C7C7C" width="20" height="20" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </div>
            </div>
            <ModalPhases 
                timePhasesLength={props.timePhases.length}
                addNewPhaseElement={ (e) => props.addNewPhaseElement(e) }
                closeModal={ () => setShowModal(false) }
                showModal={showModal}
            />
        </>
    );
}

export default BottomContainer