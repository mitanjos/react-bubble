import React,{Component} from 'react'

class UsageInputComponent extends Component{

	render(){
		console.log("UsageInputComponent::render::props",this.props)
		const {calculateCicleDimensions,percentageUsage,percentageUsageChange} = this.props
		return (
			<div>
				<input value={percentageUsage} onChange={percentageUsageChange} />
				<button onClick={calculateCicleDimensions}>Plot Graph</button>
			</div>
		)
	}	
}
export default UsageInputComponent