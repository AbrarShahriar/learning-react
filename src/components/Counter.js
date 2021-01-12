import React, { Component } from 'react'

class Counter extends Component {
	constructor() {
		super()
		this.state = {
			count: 0
		}
	}

	increment() {

		//imcrement by 1
		// this.setState({
		// 	count: this.state.count + 1
		// }, () => console.log("Callback value", this.state.count))
		// console.log(this.state.count)

		//use prevState to increment by whatever value we want
		this.setState((prevState) => ({
			count: prevState.count + 1
		}))
		console.log(this.state.count)
	}

	incrementFive() {

		//these are grouped in one by react to improve performance 
		// so count will increment by 1
		this.increment()
		this.increment()
		this.increment()
		this.increment()
		this.increment()
	}

	render() {
		return (
		      <div>
		       <div>
		        Count {this.state.count}
		       </div>
		        <button onClick={() => this.incrementFive()}>Increment</button>
		      </div>
		)
	}
}

export default Counter
