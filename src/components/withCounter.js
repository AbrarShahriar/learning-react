//Higher order component

import React from 'react'

const withCounter = (WrappedComponent, n = 1) => {
	
	 class WithCounter extends React.Component {
		constructor(props) {
			super(props)
			
			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState((prevState => {
				return { count: prevState.count + n }
			}))
		}

		render() {
			return <WrappedComponent 
			count={this.state.count} 
			incrementCount={this.incrementCount}
			/*for other props*/
			{...this.props}
			/>
		}
	}

	return WithCounter
}

export default withCounter