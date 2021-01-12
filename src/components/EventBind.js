import React, { Component } from 'react'

class EventBind extends Component {
	constructor() {
		super()
		this.state = {
			message: "Hello"
		}

		//3. ...
		//this.clickHandler = this.clickHandler.bind(this)
	}

	/*clickHandler() {
		this.setState({
			message: "Goodbye!"
		})
	}*/

	clickHandler = () => {
		this.setState({
			message: "Goodbye!"
		})
	}

	//setState to change ui dynamically
	//class Components are trickier to change states

	//1.this.clickHandler.bind(this) will add the fucntion to "this" object...keep adding and performance will be bad
	//2.() => this.clickHandler() arrow fucntion...performance issues are there
	//official method:
	//3. up there...in the constructor
	//4. up there...declaring as a variable with arrow fucntion

	//render is a loop

	render() {
		return (
		      <div>
		      <div>{this.state.message}</div>
		        <button onClick={this.clickHandler}>Change state</button>
		      </div>
		)
	}
}

export default EventBind
