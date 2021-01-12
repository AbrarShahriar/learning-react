import React from 'react'

class User extends React.Component {
	render() {
		return (
			<div>
				{this.props.render(false)}
			</div>
		)
	}
}

export default User