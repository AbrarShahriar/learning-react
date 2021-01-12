import React, { Component } from 'react'

class UserGreeting extends Component {
	constructor() {
		super()
		this.state = {
			isLoggedIn: false
		}
	}

	render() {
		//1.if doesnt use jsx
		//2.ternary operator( ? : ) can be used inside jsx

		return (
		        this.state.isLoggedIn ? 
		        	<div>Welcome Adib</div> :
		        	<div>Welcome Guest</div>
		)

		/*let message
		if(this.state.isLoggedIn) {
			message = <div>Welcome Adib</div>
		} else {
			message = <div>Welcome Guest</div>
		}

		return <div>{message}</div>*/

		

		/*if(this.state.isLoggedIn) {
			return(
			       <div>Welcome Adib</div>
			)
		} else {
			return (
			        <div>Welcome Guest</div>
			)
		}*/
		/*return (
		    <div>
		    	<div>
			  		Welcome Adib
				</div>
				<div>
			  		Welcome Guest
				</div>
		    </div>
		)*/
	}
}

export default UserGreeting