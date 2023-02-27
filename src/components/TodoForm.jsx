import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from '../redux/todoSlice';
import '../assets/sass/_form.scss';

function TodoForm() {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo({
			title: value,
		}));
	}

	return (
		<div className="form" onSubmit={onSubmit}>
			<form className='form_layout'>
				<input
					type="text"
					className="form_text"
					placeholder="Create a new todo..."
					value={value}
					onChange={(event) => setValue(event.target.value)}>

				</input>
				<button type='submit' className='form_btn'>+</button>
			</form>
		</div>
	);
}

export default TodoForm;