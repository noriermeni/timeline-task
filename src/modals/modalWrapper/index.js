import React from 'react';
import "./style.scss"

const ModalWrapper = (props) => {

    return (
        <>
            <div
                className={ "modalChannelsContainer " + ( props.showModal && 'activeModalChannelsContainer' ) }
            >
                <p className="modalChannelsTitle">{props.modalTitle}</p>
                <div
                    className="contentContainer"
                >
                    {props.children}
                </div>
            </div>
            <div
                onClick={props.closeModal}
                className={ "overlayModalChannelsContainer " + ( props.showModal && 'activeOverlayModalChannelsContainer' ) }
            />
        </>
    );
}

export default ModalWrapper