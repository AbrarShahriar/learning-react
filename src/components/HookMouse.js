import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	//pass empty array to run only once
	useEffect(() => {
		console.log('useEffect called')
		window.addEventListener('mousemove', logMousePosition)

		//cleanup code
		//component unmounted code
		return () => {
			console.log('component unmounted')
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, [])

	const logMousePosition = e => {
		console.log('mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	return (
		<div>
			Hooks X - {x} Y - {y}
		</div>
	)
}

export default HookMouse