import React from 'react'

const ChildComponent = (props) => {

	const clickHandler = () => alert("Event Handled")


	return (
		<div>
		  <button onClick={() => props.greetHandler("child")}>Greet Parent Right Now</button>
		</div>
		)
}

export default ChildComponent