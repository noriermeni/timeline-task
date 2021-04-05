import React, { Component } from 'react';

import TopButtonsContainer from './containers/topButtonsContainer'
import GraphContainer from './containers/graphContainer'
import BottomContainer from './containers/bottomContainer'

import './style/base.scss'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timePhases: [
                {
                    phaseId: 1,
                    start: '10:00',
                    end: '10:06',
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
                    start: '10:20',
                    end: '10:26',
                    minStart: '10',
                    minEnd: '90',
                },
                {
                    phaseId: 4,
                    start: '10:14',
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
                {
                    phaseId: 7,
                    start: '10:55',
                    end: '11:20',
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
                },
                {
                    id: 1,
                    title: 'Channel A',
                    color: '#CB4B5A',
                    isActive: true,
                },
                {
                    id: 2,
                    title: 'Channel B',
                    color: '#75308E',
                    isActive: false,
                },
                {
                    id: 3,
                    title: 'Channel C',
                    color: '#30638E',
                    isActive: false,
                },
                {
                    id: 4,
                    title: 'Channel C',
                    color: '#008775',
                    isActive: false,
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
            minutes: 0,
        }
    }

    componentDidMount() {
        this.sortTimesAndReturnMinutes()    
    };

    // Sort Times and return minutes between start time and end time - START
    sortTimesAndReturnMinutes = () => {
        let time = {
            start: this.state.timePhases.sort((a, b) => (a.start < b.start) ? -1 : ((a.start > b.start) ? 1 : 0))[0].start.split(":"),
            end: this.state.timePhases.sort((a, b) => (a.end < b.end) ? -1 : ((a.end > b.end) ? 1 : 0))[this.state.timePhases.length - 1].end.split(":"),     
        } 
        this.setState({
            minutes: (( parseInt(time.end[0]) - parseInt(time.start[0]) ) * 60 ) + parseInt(time.end[1]) - parseInt(time.start[1]),
        })
        console.log((( parseInt(time.end[0]) - parseInt(time.start[0]) ) * 60 ) + parseInt(time.end[1]) - parseInt(time.start[1]))
    };
    // Sort Times and return minutes beteen start time and end time - END


    // Function used to remove Phase Object from Array - START
    removePhaseElement = (phaseId) => {
        let timePhases = [...this.state.timePhases];
        timePhases.splice(timePhases.findIndex(i => i.phaseId === phaseId ), 1);
        timePhases.map((e, idx) => e.phaseId = ++idx );
        this.setState({ timePhases, timePhases });    
    };
    // Function used to remove Phase Object from Array - END

    // Function used to change Phase Object element in Array - START
    onChangePhaseElements = (objPhaseElement) => {
        let newTimePhases = [...this.state.timePhases];
        let foundPhaseElement = this.state.timePhases.findIndex(item => item.phaseId == objPhaseElement.phaseId);
        newTimePhases[foundPhaseElement][objPhaseElement.name] = objPhaseElement.value;
        this.setState({ timePhases: newTimePhases});
    };
    // Function used to change Phase Object element in Array - START

    // Function used to add new element to Time Phases - START
    addNewPhaseElement = (phase) => {
        this.setState({ timePhases: this.state.timePhases.concat(phase) });
    }
    // Function used to add new element to Time Phases - START

    // Function used to change Channel object to Active true - START 
    enableChannelElement = (channel) => { // TODO: NEED TO REFACTOR function enableChannelElement and disableChannelElement need to change to toggleChannelElement
        let newChannels = [...this.state.channels];
        let foundChannelIndex = newChannels.findIndex(x => x.id === channel.id);
        newChannels[foundChannelIndex].isActive = true;
        this.setState({ channels: newChannels });
    }
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
                        minutes={this.state.minutes}
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