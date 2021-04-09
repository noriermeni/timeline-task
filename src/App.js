import React, { Component } from 'react';

import TopButtonsContainer from './containers/topButtonsContainer';
import GraphContainer from './containers/graphContainer';
import BottomContainer from './containers/bottomContainer';

import './style/base.scss';

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
            timePhases: [
                {
                    phaseId: 1,
                    start: '10:00',
                    end: '10:11',
                    minStart: '10',
                    minEnd: '90',
                },
                {
                    phaseId: 2,
                    start: '10:12',
                    end: '10:18',
                    minStart: '10',
                    minEnd: '90',
                },
                {
                    phaseId: 3,
                    start: '10:21',
                    end: '10:26',
                    minStart: '10',
                    minEnd: '90',
                },
                {
                    phaseId: 4,
                    start: '10:29',
                    end: '10:35',
                    minStart: '10',
                    minEnd: '90',
                },
                {
                    phaseId: 5,
                    start: '10:37',
                    end: '10:43',
                    minStart: '10',
                    minEnd: '90',
                },
                {
                    phaseId: 6,
                    start: '10:47',
                    end: '10:53',
                    minStart: '10',
                    minEnd: '90',
                },
            ],
            channels: [
                {
                    id: 0,
                    title: 'Speed',
                    color: '#EEAD49',
                    isActive: true,
                    beatings: {
                        arrayX: [ 92, 100, 120, 130, 140, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1013 ],
                        arrayY: [ 140, 120, 90, 120, 150, 170, 180, 154, 138, 132, 120, 112, 153, 145, 128, 122, 122, 130, 115, 135, 120 ],
                    }
                },
                {
                    id: 1,
                    title: 'Channel A',
                    color: '#CB4B5A',
                    isActive: true,
                    beatings: {
                        arrayX: [ 92, 100, 120, 130, 140, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1013 ],
                        arrayY: [ 100, 120, 90, 110, 120, 140, 180, 174, 158, 172, 160, 142, 133, 125, 138, 142, 132, 160, 125, 145, 150 ],
                    }
                },
                {
                    id: 2,
                    title: 'Channel B',
                    color: '#75308E',
                    isActive: false,
                    beatings: {
                        arrayX: [ 92, 100, 120, 130, 140, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1013 ],
                        arrayY: [ 80, 90, 100, 90, 100, 120, 130, 144, 128, 142, 170, 162, 153, 175, 168, 182, 189, 193, 175, 170, 172 ],
                    }
                },
                {
                    id: 3,
                    title: 'Channel C',
                    color: '#30638E',
                    isActive: false,
                    beatings: {
                        arrayX: [ 92, 100, 110, 115, 120, 130, 140, 150, 200, 210, 250, 300, 350, 400, 450, 500, 550, 600, 620, 650, 650, 700, 710, 750, 754, 800, 850, 900, 950, 1013 ],
                        arrayY: [ 70, 90, 113, 110, 128, 132, 140, 110, 111, 113, 115, 113, 110, 128, 132, 140, 122, 133, 145, 140, 138, 145, 142, 140, 149, 160, 153, 175, 150, 162 ],
                    }
                },
                {
                    id: 4,
                    title: 'Channel C',
                    color: '#008775',
                    isActive: false,
                    beatings: {
                        arrayX: [ 92, 100, 120, 130, 140, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1013 ],
                        arrayY: [ 95, 97, 103, 110, 106, 110, 123, 131, 128, 122, 110, 102, 113, 125, 138, 142, 159, 143, 145, 147, 151 ],
                    }
                },
                {
                    id: 5,
                    title: 'Channel D',
                    color: '#d2691e',
                    isActive: true,
                    beatings: {
                        arrayX: [ 92, 100, 120, 130, 140, 200, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1013 ],
                        arrayY: [ 92, 92, 113, 114, 126, 140, 133, 121, 126, 112, 115, 122, 116, 125, 141, 132, 169, 173, 185, 197, 80 ],
                    }
                },
            ],
            svgTimeName: 'TIME',
            svgTimeLengths: [
                '10:00',
                '10:05',
                '10:10',
                '10:15',
                '10:20',
                '10:25',
                '10:30',
                '10:35',
                '10:40',
                '10:45',
                '10:50',
                '10:55',
                '11:00',
            ],
            beatsLength: [
                '0',
                '1'
            ],
            timeZone: [],
        }
    }

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
    // Function used to change Phase Object element in Array - START

    // Function used to add new element to Time Phases - START
    addNewPhaseElement = (phase) => {
        this.setState({ timePhases: this.state.timePhases.concat(phase) });
    };
    // Function used to add new element to Time Phases - START

    // Function used to change Channel object to Active true - START 
    enableChannelElement = (channel) => { // TODO: NEED TO REFACTOR function enableChannelElement and disableChannelElement need to change to toggleChannelElement
        let newChannels = [...this.state.channels];
        let foundChannelIndex = newChannels.findIndex(x => x.id === channel.id);
        newChannels[foundChannelIndex].isActive = true;
        this.setState({ channels: newChannels });
    };
    // Function used to change Channel object to Active true - START

    // Function used to change Channel object to Active false - START
    disableChannelElement = (channel) => { // TODO: NEED TO REFACTOR function enableChannelElement and disableChannelElement need to change to toggleChannelElement
        let newChannels = [...this.state.channels];
        let foundChannelIndex = newChannels.findIndex(x => x.id === channel.id);
        newChannels[foundChannelIndex].isActive = false;
        this.setState({ channels: newChannels });
    }
    // Function used to change Channel object to Active false - START

    render() {
        return (
            <div className="container">
                <div className="inner_container">
                    
                    <TopButtonsContainer
                        channels={this.state.channels}
                        enableChannelElement={ (channel) => this.enableChannelElement(channel) }
                        disableChannelElement={ (channel) => this.disableChannelElement(channel) }
                    />

                    <GraphContainer
                        phases={this.state.timePhases}
                        channels={this.state.channels}
                        svgTimeLengths={this.state.svgTimeLengths}
                        svgTimeName={this.state.svgTimeName}
                        beatsLength={this.state.beatsLength}
                    />
                    
                    <BottomContainer 
                        timePhases={this.state.timePhases}
                        removePhaseElement={ (phaseId) => this.removePhaseElement(phaseId) }
                        onChangePhaseElements={ (e) => this.onChangePhaseElements(e) }
                        addNewPhaseElement={ (phase) => this.addNewPhaseElement(phase) }
                    />

                </div>
            </div>
        );
    }
}
export default App