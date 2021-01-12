import React from 'react'
import ReactDOM from 'react-dom'

const PortalDemo = (props) => {

	//outside root div of App

	return ReactDOM.createPortal(
		(<h1>Portals Demo</h1>),
		 document.getElementById('portal-root')
		)
}

export default PortalDemo