import CircleReducer from './CircleReducer.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
	circleReducer:CircleReducer
});

export default rootReducer;