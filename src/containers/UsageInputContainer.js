import {connect} from 'react-redux'
import * as actions from '../actions'
import UsageInputComponent from '../components/UsageInputComponent'

function mapStateToProps(state){
	console.log("UsageInputContainer::mapStateToProps::state",state)
	return{
		cicleInfoList:state.circleReducer,
		percentageUsageChange:state.percentageUsageChange
	}
}

function mapDispatchToProps(dispatch){
	return {
		calculateCicleDimensions: () => {
			console.log("UsageInputContainer::mapStateToProps::percentageUsageChange")
			dispatch(actions.calculateCicleDimensions())
		},
		percentageUsageChange: event => {
			console.log("UsageInputContainer::mapDispatchToProps::state")
			dispatch(actions.percentageUsageChange(event.target.value))
		}
	}
}

const UsageInputContainer = connect(
		mapStateToProps,
		mapDispatchToProps
	)(UsageInputComponent)

export default UsageInputContainer;