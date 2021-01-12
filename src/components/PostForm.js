import React from 'react'
import axios from 'axios'

class PostForm extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 userId: '',
			 title: '',
			 body: ''
		}
	}

	changeHandler = e => {
		//name of every input has to match states name to make it(line 17) work
		this.setState({
			[e.target.name]: e.target.value
		})

	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)

		axios.post("http://jsonplaceholder.typicode.com/posts", this.state)
			.then(response => console.log(response))
			.catch(err => console.log(err))
	}
 
	render() {
		const { userId, title, body } = this.state

		return (
			<div>
				<form onSubmit={this.submitHandler}>
					UserID: <input onChange={this.changeHandler} value={userId} type="text" name="userId" /><br />
					Title: <input onChange={this.changeHandler} value={title} type="text" name="title" /><br />
					Body: <input onChange={this.changeHandler} value={body} type="text" name="body" /><br />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm