import React from 'react'

const NameList = (props) => {

	//only use index as "key" if the list is static and doesn't change
	//list wont be reordered or filtered

	//use hashing or random for keys

	const names = ['Adib', 'Abrar', 'Shahriar', 'Kabir']
	const nameList = names.map(name => <h2  key={name.toString()}>{name}</h2>)

	return (
		<div>
		  {
		  	names.map(name => 
		  		<h2 key={name.toString()}>{name}</h2>
		  	)
		  }
		  <hr/>
		  {nameList}
		</div>
		)
}

export default NameList