import React from 'react'

const Error = ({heroName}) => {

	if(heroName === "Goblin") {
		throw new Error('not a hero');
	}

	return (
		<h1>{heroName}</h1>
		)
}

export default Error