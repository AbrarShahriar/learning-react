import React, { useEffect, useState } from 'react'

function EffectCounter() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')

	//useEffect runs everytime a change happens in the dom...by passing an array, only run if that element changes
	useEffect(() => {
		console.log("useEffect updating title")
		document.title = `Clicked ${count} times`
	}, [count])

	return (
		<div>
			<input 
				type="text"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	)
}

export default EffectCounter