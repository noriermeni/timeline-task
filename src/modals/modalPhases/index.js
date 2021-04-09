import React, { useEffect, useState } from 'react';
import ModalWrapper from '../modalWrapper'
import './style.scss'

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
                        <input
                            type="time"
                            className="input"
                            name={'start'}
                            value={start}
                            onChange={ (e) => setStart(e.target.value) }
                        />
                    </div>
                    <div className="inputContainer">
                        <p className="inputLabel">End</p>
                        <input
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
                            type="text"
                            className="input"
                            name={'minStart'}
                            value={minStart}
                            onChange={ (e) => setMinStart(e.target.value) }
                        />
                    </div>
                    <div className="inputContainer">
                        <p className="inputLabel">Min End</p>
                        <input
                            type="text"
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