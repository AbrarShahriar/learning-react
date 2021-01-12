import React from 'react'
import ComponentE from './ComponentE'
import UserContext from './userContext'

class ComponentD extends React.Component {
	//or this...
	static contextType = UserContext
	
	render() {
		return (
			<div>
				Component D context {this.context}
				<ComponentE />
			</div>
		)
	}
}

//use this
// ComponentD.contextType = UserContext

export default ComponentD