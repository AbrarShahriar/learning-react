import React, { useState } from 'react'
import HookMouse from './HookMouse'

//for cleanup...if not done...HookMouse will keep running in the backgrounf
function MouseContainer() {
	const [display, setDisplay] = useState(true)

	return (
		<div>
			<button onClick={()  => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />}
		</div>
	)
}

export default MouseContainer