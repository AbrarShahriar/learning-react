import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			comment: "",
			topic: "react"
		}
	}

	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	handleCommentChange = (e) => {
		this.setState({
			comment: e.target.value
		})
	}

	handleTopicChange = (e) => {
		this.setState({
			topic: e.target.value
		})
	}

	submitForm = (e) => {
		e.preventDefault()
		alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
	}

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<div>
					<label>Username</label>
					<input onChange={this.handleUsernameChange} value={this.state.username} type="text" />
				</div>
				<div>
					<label>Comment</label>
					<textarea onChange={this.handleCommentChange} value={this.state.comment} name="" id="" cols="30" rows="2"></textarea>
				</div>
				<div>
					<label>Topic</label>
					<select onChange={this.handleTopicChange} value={this.state.topic}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form