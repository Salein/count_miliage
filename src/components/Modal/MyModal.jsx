import React from 'react'
import c from './Modal.module.css'

const MyModal = ({ children, visible, setVisible }) => {

	const rootClass = [c.modal]

	if (visible) {
		rootClass.push(c.active)
	}

	return (
		<div className={rootClass.join(' ')} onClick={() => {setVisible(false)}} >
			<div className={c.modalContent} onClick={(e) => e.stopPropagation()}>
				<h1>Ты заработал:</h1>
				<br/>
				{children}
				<h2>рублей</h2>
			</div>
		</div>
	)
}

export default MyModal