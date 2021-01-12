import React from 'react'
import axios from 'axios'

class PostList extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 posts: [],
			 errMsg: ""
		}
	}

	componentDidMount() {
		axios.get("http://jsonplaceholder.typicode.com/posts")
		.then(response => {
			console.log(response.data)
			this.setState({ posts: response.data })
		})
		.catch(err => {
			console.log(err)
			this.setState({ errMsg: "Something Went Wrong" })
		})
	}

	render() {
		const { posts, errMsg } = this.state
		return (
			<div>
				List of posts
				<hr />
				{
					posts.length ?
					posts.map(post => {
						return (
						<div key={post.id}>{post.title}</div>
					)}) :
					null
				}
				{
					errMsg ?
						<div>{errMsg}</div> :
						null
				}
			</div>
		)
	}
}

export default PostList