import {connect} from 'react-redux'
import BubbleCanvasComponent from '../components/BubbleCanvasComponent'

function mapStateToProps(state){
	console.log("BubbleCanvasComponent::mapStateToProps::state",state)
	return{
		circleInfoList1:state.circleReducer.circleInfoList1,
		circleInfoList2:state.circleReducer.circleInfoList2,
		circleInfoList3:state.circleReducer.circleInfoList3
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

const BubbleCanvasContainer = connect(
		mapStateToProps,
		mapDispatchToProps
	)(BubbleCanvasComponent)

export default BubbleCanvasContainer;