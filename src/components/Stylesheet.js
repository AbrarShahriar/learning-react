import React from 'react'
import './Stylesheet.css'

const Stylesheet = (props) => {

	let className = props.primary ? "primary" : ""
	let inlineStyle = {
		fontStyle: "italic",
		color: "blue",
		fontSize: "24px",
		fontWeight: "bold"
	}

	return (
		<div>
		  <h1 className={`${className} font-xl`}>Stylesheet</h1>
		  <p style={inlineStyle}>Inline</p>
		</div>
		)
}

export default Stylesheet