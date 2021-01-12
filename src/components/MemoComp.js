import React from 'react'

const MemoComp = ({name}) => {
	console.log("MemoComp render")
	return (
		<div>
		  {name}
		</div>
		)
}

export default React.memo(MemoComp)