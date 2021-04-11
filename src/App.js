import React, { Component } from 'react';

import TopButtonsContainer from './containers/topButtonsContainer';
import GraphContainer from './containers/graphContainer';
import BottomContainer from './containers/bottomContainer';

import './style/base.scss';

const url = './data/data.json'

/**
 * Current Functionality of the Table:
 *
 * 
 * Known bugs:
 * 
 * 
 */

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timePhases: [],
            channels: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    // Request for data from fake api - START
    getData = () => {
        const that = this;
        fetch(url)
            .then(function(response){ return response.json(); })
            .then(function(result) {
                that.setState({
                    timePhases: result.timePhases,
                    channels: result.channels,
                })
            });
    }
    // Request for data from fake api - END

    // Function used to remove Phase Object from Array - START
    removePhaseElement = (phaseId) => {
        let timeRemovedPhases = [ ...this.state.timePhases ];
        timeRemovedPhases.splice(timeRemovedPhases.findIndex(i => i.phaseId === phaseId ), 1)
        timeRemovedPhases.map((e, idx) => e.phaseId = ++idx );
        this.setState({ timePhases: [...timeRemovedPhases] });
    }
    // Function used to remove Phase Object from Array - END

    // Function used to change Phase Object element in Array - START
    onChangePhaseElements = (objPhaseElement) => {
        let newTimePhases = [...this.state.timePhases];
        let foundPhaseElement = this.state.timePhases.findIndex(item => item.phaseId === objPhaseElement.phaseId);
        newTimePhases[foundPhaseElement][objPhaseElement.name] = objPhaseElement.value;
        this.setState({ timePhases: newTimePhases});
    };
    // Function used to change Phase Object element in Array - END

    // Function used to add new element to Time Phases - START
    addNewPhaseElement = (phase) => {
        this.setState({ timePhases: this.state.timePhases.concat(phase) });
    };
    // Function used to add new element to Time Phases - END

    // Function used to change Channel object to Active true - START 
    enableChannelElement = (channel) => { // TODO: NEED TO REFACTOR function enableChannelElement and disableChannelElement need to change to toggleChannelElement
        let newChannels = [...this.state.channels];
        let foundChannelIndex = newChannels.findIndex(x => x.id === channel.id);
        newChannels[foundChannelIndex].isActive = true;
        this.setState({ channels: newChannels });
    };
    // Function used to change Channel object to Active true - END

    // Function used to change Channel object to Active false - START
    disableChannelElement = (channel) => { // TODO: NEED TO REFACTOR function enableChannelElement and disableChannelElement need to change to toggleChannelElement
        let newChannels = [...this.state.channels];
        let foundChannelIndex = newChannels.findIndex(x => x.id === channel.id);
        newChannels[foundChannelIndex].isActive = false;
        this.setState({ channels: newChannels });
    }
    // Function used to change Channel object to Active false - END

    // Enable phase to cut from others in Graph - START
    enableElementOfPhases = (phaseId) => {
        let timeNewPhases = [ ...this.state.timePhases ];
        phaseId.map(phase => timeNewPhases.filter(e => e.phaseId === phase ? e.isEnable = !e.isEnable : null ))
        this.setState({ timePhases: [...timeNewPhases] });
    }
    // Enable phase to cut from others in Graph - END

    // Reset All Phases to isEnable false - START
    resetPhases = () => {
        let timeNewPhases = [ ...this.state.timePhases ];
        timeNewPhases.map(e => e.isEnable = false )
        this.setState({ timePhases: [...timeNewPhases] });
    }
    // Reset All Phases to isEnable false - END

    render() {

        return (
            <div className="container">
                <div className="inner_container">
                    { this.state.timePhases.length && this.state.channels.length ?
                        <>
                            <TopButtonsContainer
                                channels={this.state.channels}
                                enableChannelElement={ (channel) => this.enableChannelElement(channel) }
                                disableChannelElement={ (channel) => this.disableChannelElement(channel) }
                            />

                            <GraphContainer
                                phases={this.state.timePhases}
                                channels={this.state.channels}
                                enableElementOfPhases={ (phaseId) => this.enableElementOfPhases(phaseId) }
                                resetPhases={ () => this.resetPhases() }
                            />

                            <BottomContainer
                                timePhases={this.state.timePhases}
                                removePhaseElement={ (phaseId) => this.removePhaseElement(phaseId) }
                                onChangePhaseElements={ (e) => this.onChangePhaseElements(e) }
                                addNewPhaseElement={ (phase) => this.addNewPhaseElement(phase) }
                            />
                        </>
                    :
                        <div className="loader">
                            <div className="loaderWheel"/>
                            <div className="loaderText"/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default App