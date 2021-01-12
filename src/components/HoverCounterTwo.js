import React from 'react'

class HoverCounterTwo extends React.Component {

	render() {
		const { count, incrementCount } = this.props

		return (
			<h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
		)
	}
}

export default HoverCounterTwo