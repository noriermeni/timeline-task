import React from 'react';
import './style.scss';

import ModalWrapper from '../modalWrapper'
import TopButton from "../../components/topButton";

const ModalChannels = (props) => {

    const checkLengthOfActiveChannels = () => {
        return props.channels.filter((x, i) => {
            return x.isActive;
        }).length === props.channels.length
    }

    return (
        <>
            <ModalWrapper
                modalTitle={'Choose Channel'}
                showModal={props.showModal}
                closeModal={props.closeModal}
            >
                { !checkLengthOfActiveChannels() ?
                    React.Children.toArray(
                        props.channels.map(channel =>
                            !channel.isActive &&
                            <TopButton
                                disableChannelElement={() => props.disableChannelElement(channel)}
                                enableChannelElement={() => props.enableChannelElement(channel)}
                                channel={channel}
                            />
                        )
                    )
                :
                    <>
                        <p className="noChannelsDeactivateText">Has no Channels deactivate</p>
                        <img className="peaceIcon" src={'../../assets/icons/peace.svg'} />
                    </>
                }
            </ModalWrapper>
        </>
    );
}

export default ModalChannels