import React, { Component } from 'react';

import TopButtonsContainer from './components/topButtonsContainer'
import GraphContainer from './components/graphContainer'
import BottomContainer from './components/bottomContainer'

import './main.scss'
import './reset.scss'

class App extends Component {
    constructor(props) {
        super(props)
        this.state ={
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
            ]
        }
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

    render() {
        return (
            <div className="container">
                <div className="inner_container">
                    <TopButtonsContainer />
                    <GraphContainer />
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