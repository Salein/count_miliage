import React from 'react'
import './button.css'


const MyButton = ({ children, ...props }) => {
	return (
		<div className="container">
			<button {...props} className="neon-btn neon-btn--green">
				{children}
			</button>
		</div>
	)
}

export default MyButton