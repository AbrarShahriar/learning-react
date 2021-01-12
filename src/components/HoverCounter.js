import React from 'react'
import withCounter from './withCounter'

class HoverCounter extends React.Component {
	render() {
		const { count, incrementCount } = this.props
		return (
			<div>
				<h1 onMouseOver={incrementCount}>Hover {count} times</h1>
			</div>
		)
	}
}

export default withCounter(HoverCounter, 10) 