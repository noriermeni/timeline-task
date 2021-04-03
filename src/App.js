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
                    minStart: '10%',
                    minEnd: '90%',
                },
                {
                    phaseId: 2,
                    start: '10:12',
                    end: '10:18',
                    minStart: '10%',
                    minEnd: '90%',
                },
                {
                    phaseId: 3,
                    start: '10:20',
                    end: '10:26',
                    minStart: '10%',
                    minEnd: '90%',
                },
                {
                    phaseId: 4,
                    start: '10:29',
                    end: '10:35',
                    minStart: '10%',
                    minEnd: '90%',
                },
                {
                    phaseId: 5,
                    start: '10:37',
                    end: '10:43',
                    minStart: '10%',
                    minEnd: '90%',
                },
                {
                    phaseId: 6,
                    start: '10:47',
                    end: '10:53',
                    minStart: '10%',
                    minEnd: '90%',
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
        }
    }
    
    onChangeLineCharts = (e) => {
        console.log(e)
    }

    removeElementFromLineChart = () => {
        
    }

    addNewLineOfChart = () => {

    }

    removePhaseElement = (phaseId) => {
        let timePhases = [...this.state.timePhases]
        timePhases.splice(timePhases.findIndex(i => i.phaseId === phaseId ), 1);
        this.setState({ timePhases, timePhases });    
    }

    onChangePhaseElements = (phaseId, startPhase) => {
        // let foundPhaseElement = timePhases.find(item => item.phaseId == phaseId)
        console.log(phaseId, startPhase)
    }

    enableChannelElement = (channel) => {
        let newChannels = [...this.state.channels]
        let foundChannelIndex = newChannels.findIndex(x => x.id === channel.id);
        newChannels[foundChannelIndex].isActive = true
        this.setState({ channels: newChannels })
    }

    disableChannelElement = (channel) => {
        let newChannels = [...this.state.channels]
        let foundChannelIndex = newChannels.findIndex(x => x.id === channel.id);
        newChannels[foundChannelIndex].isActive = false
        this.setState({ channels: newChannels })
    }

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

                    />
                    
                    <BottomContainer 
                        timePhases={this.state.timePhases}
                        removePhaseElement={ (phaseId) => this.removePhaseElement(phaseId) }
                        onChangePhaseElements={ (phaseId, startPhase) => this.onChangePhaseElements(phaseId, startPhase) }
                    />

                </div>
            </div>
        );
    }
}
export default App