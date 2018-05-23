import React, { Component } from 'react';
import './App.css';
import BubbleCanvasContainer from '../containers/BubbleCanvasContainer'
import UsageInputContainer from '../containers/UsageInputContainer'

class App extends Component {

	
	render() {
		return (
			<div className="App">
				<UsageInputContainer/>
				<p></p>
				<BubbleCanvasContainer/> 
      		</div>
      	);
  	}
}

export default App;
