import React, { useEffect, useState } from 'react';
import ModalWrapper from '../modalWrapper'
import './style.scss'

/**
 * Current Functionality of the Table:
 *
 *
 * Known bugs:
 *
 * TODO: Input Time validation need to change because is not ok.
 * TODO: After Submit the new Phase problems with alerts. Need to close modal or on change to remove the alert.
 *
 */

const ModalPhases = (props) => {
    const [ alertError, setAlertError ] = useState (false)
    const [ alertSuccess, setAlertSuccess ] = useState (false)
    const [ alertText, setAlertText ] = useState('')

    const [ start, setStart] = useState('')
    const [ end, setEnd ] = useState('')
    const [ minStart, setMinStart ] = useState('')
    const [ minEnd, setMinEnd ] = useState('')

    const addNewPhaseElement = () => {
        if( start !== '' && end !== '' && minStart !== '' && minEnd !== '' ) {
            props.addNewPhaseElement({
                phaseId: props.timePhasesLength + 1,
                start,
                end,
                minStart,
                minEnd,
            })
            setStart('')
            setEnd('')
            setMinStart('')
            setMinEnd('')
            setAlertSuccess(true)
            setAlertError(false)
            setAlertText('Phase is added successfully!')
        } else {
            setAlertError(true)
            setAlertSuccess(false)
            setAlertText('Please, check inputs are empty!')
        }
    }

    return (
        <>
            <ModalWrapper
                modalTitle={'Add new Phases'}
                showModal={props.showModal}
                closeModal={props.closeModal}
            >
                <div className="phaseInputsContainer">
                    <div className="inputContainer">
                        <p className="inputLabel">Start</p>
                        <input // TODO: Not Supported in Internet Explorer need to make validation with input text
                            type="time"
                            className="input"
                            name={'start'}
                            value={start}
                            onChange={ (e) => setStart(e.target.value) }
                        />
                    </div>
                    <div className="inputContainer">
                        <p className="inputLabel">End</p>
                        <input // TODO: Not Supported in Internet Explorer need to make validation with input text
                            type="time"
                            className="input"
                            name={'end'}
                            value={end}
                            onChange={ (e) => setEnd(e.target.value) }
                        />
                    </div>
                    <div className="inputContainer">
                        <p className="inputLabel">Min Start</p>
                        <input
                            type="number" // TODO: Need a Validation for percents
                            min="0"
                            max="100"
                            className="input"
                            name={'minStart'}
                            value={minStart}
                            onChange={ (e) => setMinStart(e.target.value) }
                        />
                    </div>
                    <div className="inputContainer">
                        <p className="inputLabel">Min End</p>
                        <input
                            type="number" // TODO: Need a Validation for percents
                            min="0"
                            max="100"
                            className="input"
                            name={'minEnd'}
                            value={minEnd}
                            onChange={ (e) => setMinEnd(e.target.value) }
                        />
                    </div>
                    <button 
                        className="button"
                        type="button"
                        onClick={ () => addNewPhaseElement() }
                    >Add New Phase</button>
                    <p className={alertError ? 'alert alertError' : alertSuccess ? 'alert alertSuccess' : 'alertHiden' }>{alertText}</p>
                </div>
            </ModalWrapper>
        </>
    );
}

export default ModalPhases