import React,{Component} from 'react'
import {usage} from '../actions/'
class BubbleCanvasComponent extends Component{

	render(){
		console.log("BubbleCanvasComponent::render::props",this.props)
		const {circleInfoList1,circleInfoList2,circleInfoList3} = this.props
		console.log("BubbleCanvasComponent::render::cicleInfoList1::",circleInfoList1)
		console.log("BubbleCanvasComponent::render::cicleInfoList2::",circleInfoList2)
		console.log("BubbleCanvasComponent::render::cicleInfoList3::",circleInfoList3)
		var consolidatedData = []
		consolidatedData.push(circleInfoList1)
		consolidatedData.push(circleInfoList2)
		consolidatedData.push(circleInfoList3)
		const colors = ["blue","pink","orange","purple","green"]
		return (
			<div>
				<svg height="300" width="300" className="backdrop-blue">
					{circleInfoList1.map(function (circleInfo,i)
						{
							return 	<circle key={i} cx={circleInfo.x} cy={circleInfo.y} r={circleInfo.r} fill={colors[i]}/>
						}
						)
					}
				</svg>
				<svg  height="300" width="10">
				</svg>

				<svg height="300" width="300" className="backdrop-blue">
					{circleInfoList2.map(function (circleInfo,i){
						return <circle key={i} cx={circleInfo.x} cy={circleInfo.y} r={circleInfo.r} fill={colors[i]}/>
					}
						)}
					}						
				</svg>
				<svg  height="300" width="10">
				</svg>
				<svg height="300" width="300" className="backdrop-blue">
					{circleInfoList3.map(function (circleInfo,i){
						return <circle key={i} cx={circleInfo.x} cy={circleInfo.y} r={circleInfo.r} fill={colors[i]}/>
					}
						)}
					}
						
				</svg>
				<p></p>
				<table width="70%" align="center">
				<tbody>
					<tr><th>Month 1</th><th>Month 2</th><th>Month 3</th></tr>
				{circleInfoList1.map(function (circleInfo,i)
						{
							return 	<tr><td>{usage[0][i]} %</td><td>{usage[1][i]} %</td><td>{usage[2][i]} %</td></tr>
						}
						)
					}
				</tbody>
				</table>
			</div>
		)
	}	
}
export default BubbleCanvasComponent