export const usage = [	
				[20,20,20,20,20],
				[35,30,15,10,5],
				[40,15,15,10,5]]

export const calculateCicleDimensions = (percentage) => {
	console.log("Will calculate Circle's dimentions")
	var denom1 = calculateDemon(usage[0])
	var denom2 = calculateDemon(usage[1])
	var denom3 = calculateDemon(usage[2])
	var maxDenom = Math.max(Math.max(denom1,denom2),denom3)
	console.log("calculateCicleDimensions::denom",maxDenom)
	var scalingFactor = 95 / maxDenom
	console.log("Actions::calculateCicleDimensions::scalingFactor",scalingFactor)
	var circle1 = calculateCicleLocationAndRadius(usage[0],scalingFactor)
	var circle2 = calculateCicleLocationAndRadius(usage[1],scalingFactor)
	var circle3 = calculateCicleLocationAndRadius(usage[2],scalingFactor)
	console.log("Actions::calculateCicleDimensions::circle1::",circle1,circle2,circle3)
	return {
		type:"cicleCaclculation",
		payload:[circle1,circle2,circle3]
	}
}

export const percentageUsageChange = (value) => {
	console.log("Percentage Value update",value)
	return{
		type:"percentageUsageChange",
		payload:{
			pctValue:value
		}
	}
}

const calculateDemon = (data) => {
	var topTotal = data[0]+data[1]
	var bottomTotal = data[3]+data[4]+data[2]
	var denom = Math.max(topTotal,bottomTotal)
	console.log("Actions::calculateDemon::max",denom)
	return denom;
}
const calculateCicleLocationAndRadius = (data,scalingFactor) => {
	console.log("calculateCicleLocationAndRadius::",data,scalingFactor)
	var retArray = []
	
	var cx1 = (data[0]*scalingFactor/2)+"%"
	var cy1 = (data[0]*scalingFactor/2)+"%"
	var r1 = (data[0]*scalingFactor/2)+"%"
	var circle1 = {x:cx1,y:cy1,r:r1}
	retArray.push(circle1)

	var cx2 = (100 - (data[1]*scalingFactor/2))+"%"
	var cy2 = (data[1]*scalingFactor/2)+"%"
	var r2 = (data[1]*scalingFactor/2)+"%"
	var circle2 = {x:cx2,y:cy2,r:r2}
	retArray.push(circle2)

	var cx3 = (data[2]*scalingFactor/2)+"%"
	var cy3 = (100-(data[2]*scalingFactor/2))+"%"
	var r3 = (data[2]*scalingFactor/2)+"%"
	var circle3 = {x:cx3,y:cy3,r:r3}
	retArray.push(circle3)

	var cx5 = (100-(data[4]*scalingFactor/2))+"%"
	var cy5 = (100-(data[4]*scalingFactor/2))+"%"
	var r5 = (data[4]*scalingFactor/2)+"%"
	var circle5 = {x:cx5,y:cy5,r:r5}
	retArray.push(circle5)

	var cx4 = "50%"
	var cy4 = (100-(data[3]*scalingFactor/2))+"%"
	var r4 = (data[3]*scalingFactor/2)+"%"
	var circle4 = {x:cx4,y:cy4,r:r4}
	retArray.push(circle4)

	return retArray
}