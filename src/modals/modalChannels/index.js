import React from 'react';
import "./style.scss"
import TopButton from "../../components/topButton";
// import Peace from '../../assets/icons/peace.svg'

const ModalChannels = (props) => {

    const checkLengthOfActiveChannels = () => {
        return props.channels.filter((x, i) => {
            return x.isActive;
        }).length === props.channels.length
    }

    return (
        <>
            <div
                className={ "modalChannelsContainer " + ( props.showModal && 'activeModalChannelsContainer' ) }
            >
                <p className="modalChannelsTitle">Choose Channel</p>
                <div
                    className="contentContainer"
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

                </div>
            </div>
            <div
                onClick={props.closeModal}
                className={ "overlayModalChannelsContainer " + ( props.showModal && 'activeOverlayModalChannelsContainer' ) }
            />
        </>
    );
}

export default ModalChannels