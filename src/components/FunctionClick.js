import React from 'react'

const FunctionClick = (props) => {
	const clickHandler = () => alert("Event Handled")

	//clickHandler() executes the function...maybe its a react thing
	//clickHandler is a reference to the function...will only execute after being referenced

	return (
		<div>
		  <button onClick={clickHandler}>Click</button>
		</div>
		)
}

export default FunctionClick