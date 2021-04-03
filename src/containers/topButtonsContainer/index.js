import React, { useState } from 'react';
import "./style.scss"

import TopButton from '../../components/topButton'
import AddButton from '../../components/addButton'
import ModalChannels  from "../../modals/modalChannels";

const TopButtonsContainer = (props) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="topButtonsContainer">
                <p className="topButtonsTitle">Selected Channels</p>
                <div className="topButtonsRightContainer">
                    { React.Children.toArray (
                        props.channels.map( channel => channel.isActive &&
                            <TopButton
                            disableChannelElement={ () => props.disableChannelElement(channel) }
                            channel={channel} />
                        )
                    )}
                    <AddButton
                        showModal={ () => setShowModal(true) }
                    />
                </div>
            </div>
            <ModalChannels
                enableChannelElement={ (channel) => props.enableChannelElement(channel) }
                closeModal={ () => setShowModal(false) }
                channels={props.channels}
                showModal={showModal}
            />
        </>
    );
}

export default TopButtonsContainer