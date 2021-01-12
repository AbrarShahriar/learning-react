import React, { useState } from 'react'

function HookCounterThree() {

	const [name, setName] = useState({
		firstName: '',
		lastName: ''
	})

	return (
		<form action="">
			<input 
				onChange={e => setName({
					...name,
					firstName: e.target.value
				})} 
				value={name.firstName} 
				type="text" 
			/>
			<input 
				onChange={e => setName({
					...name,
					lastName: e.target.value
				})} 
				value={name.lastName} 
				type="text" 
			/>

			<h2>First Name: {name.firstName}</h2>
			<h2>Last Name: {name.lastName}</h2><br />
			<h2>{JSON.stringify(name, null, 5)}</h2>
		</form>
	)
}

export default HookCounterThree