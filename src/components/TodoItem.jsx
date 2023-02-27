import React from 'react';
import '../assets/sass/_todo.scss';
import cross from '../assets/images/icon-cross.svg';
import checked from '../assets/images/icon-check.svg';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';
import { deleteTodo } from '../redux/todoSlice';

function TodoItem({ id, title, completed}) {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleComplete({
			id:id,
			completed: !completed,
		}))
	} 

	const handleDeleteClick = () => {
		dispatch(deleteTodo({
			id: id,
		}))
	}

	return (
		<li className="todo">
			<input
				type="checkbox"
				/* onChange={handleCompleteClick} */
				checked={completed}
				className="todo_checkbox"
				id="check_box"
			/>
			<label
				className={`todo_check ${completed && "check_success"}`}
				htmlFor="check_box"
				onClick={handleCompleteClick}>
				{completed && (
					<img
						src={checked}
						alt="check"
						className="img_check"
					/>
				)}
			</label>
			<p>{title}</p>
			<img
				src={cross}
				alt="X"
				className="img_cross"
				onClick={handleDeleteClick}
			/>
		</li>
	);
}

export default TodoItem;