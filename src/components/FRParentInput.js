import React, { Component } from 'react'
import FRinput from './FRinput'

class FRParentInput extends Component {
	constructor() {
		super() 

		this.ir = React.createRef()
	}
	click = () => {
		this.ir.current.focus()
	}

	render() {
		return (
			<div>
			  <FRinput ref={this.ir}/>
			  <button onClick={this.click}>Focus Click</button>
			</div>
		)
	}
}

export default FRParentInput