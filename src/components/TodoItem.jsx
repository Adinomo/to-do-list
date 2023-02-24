import React from 'react';
import '../assets/sass/_todo.scss';
import cross from '../assets/images/icon-cross.svg';
import checked from '../assets/images/icon-check.svg';

function TodoItem({id, title, completed}) {
	const handleCheckbox = () => {

	} 
	return (
		<li className="todo">
			<input
				type="checkbox"
				onClick={handleCheckbox}
				checked={completed}
				className="todo_checkbox"
			/>
			<div className="todo_check">
				<img src={checked} alt="check" />
			</div>
			<p>{title}title</p>
			<img src={cross} alt="X" className='img_cross'/>
		</li>
	);
}

export default TodoItem;