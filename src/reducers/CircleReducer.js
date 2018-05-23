const intialState = {
	pctValue:"",
	circleInfoList1:[],
	circleInfoList2:[],
	circleInfoList3:[]
}

export default function(state=intialState,action){
	console.log("CircleReducer::default::state,action",state,action)
	switch(action.type){
		case "cicleCaclculation":
			console.log("CircleReducer::cicleCaclculation")
			return {...state,
							circleInfoList1:action.payload[0],
							circleInfoList2:action.payload[1],
							circleInfoList3:action.payload[2]}
		case "percentageUsageChange":
			console.log("CircleReducer::percentageUsageChange")
			return {...state,pctValue:action.payload.pctValue}
		default:
			console.log("CircleReducer::default")
			break;

	}
	return state
}