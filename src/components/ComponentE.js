import React from 'react'
import { UserConsumer } from './userContext'

export class ComponentE extends React.Component {
	render() {
		return (
			<UserConsumer>
				{
					(username) => {
						return (
						        <div>
						        	Hello {username}
						        </div>
						        )
					}
				}
			</UserConsumer>
		)
	}
}

export default ComponentE