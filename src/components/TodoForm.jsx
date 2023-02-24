import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from '../redux/todoSlice';
import '../assets/sass/_form.scss';

function TodoForm() {
	const [value, setValue] = useState('')
	const dispatch = useDispatch();
	return (
		<div className="form">
			<form className='form_layout'>
				<input
					type="text"
					className="form_text"
					placeholder="Create a new todo..."
					value={value}
					onChange={(event) => setValue(event.target.value)}>

				</input>
			</form>
		</div>
	);
}

export default TodoForm;