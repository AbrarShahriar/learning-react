import React from 'react'

const Column = (props) => {

	const items = ["Milk", "Rice", "Meat"]

	return (
	    //cant use div becoz we cant use divs inside a table
	    //we can also use fragment for lists...if we dont have keys for every element...we can return fragment
	    //we can also define fragment with <> and </> but cant pass key
		<>
			{/*{
				items.map(item => {
					<React.Fragment key={item}>
						<h1>Title</h1>
						<p>{item}</p>
					</React.Fragment>
				})
			}*/}
			<td>Name</td>
			<td>Adib</td>
		</>
		)
}

export default Column