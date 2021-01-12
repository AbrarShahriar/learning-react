import React from 'react'

// props with property name specifically written (destructured)
// ({name}) or const {name} = props
/*const Greet = ( { name } ) => {
	return <h1>Hello, {name} from function</h1>
}*/

//props with property object with attribute as property of object
const Greet = (props) => {
	return (
		<div>
		  <h1>Hello, {props.name} from function</h1>
		  {props.children}
		</div>
		)
}

export default Greet
