import React, { Component } from 'react';

import TopButtonsContainer from './components/topButtonsContainer'
import GraphContainer from './components/graphContainer'
import BottomContainer from './components/bottomContainer'

import './main.scss'
import './reset.scss'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="inner_container">
                    <TopButtonsContainer />
                    <GraphContainer />
                    <BottomContainer />
                </div>
            </div>
        );
    }
}
export default App