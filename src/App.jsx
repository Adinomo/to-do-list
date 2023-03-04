import React, { useState } from "react";
import "../src/assets/sass/_app.scss";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import light from "./assets/images/icon-sun.svg";
import dark from "./assets/images/icon-moon.svg";
import { useSelector, useDispatch } from "react-redux";
import { deleteCompleted } from "./redux/todoSlice";

function App() {
	const [mode, setMode] = useState(true);
	const [filters, setFilters] = useState("all");

	const dispatch = useDispatch();

	const todos = useSelector((state) => state.todos);

	const itemsLeft = todos.filter((todo) => todo.completed !== true);

	const handleModeChange = () => {
		setMode((prev) => !prev);
		if (mode) setDarkMode();
		else setLightMode();
	};

	const setDarkMode = () => {
		document.querySelector("body").setAttribute("data-theme", "dark");
	};

	const setLightMode = () => {
		document.querySelector("body").setAttribute("data-theme", "light");
	};

	const clearCompleted = () => {
		dispatch(deleteCompleted());
	};

	return (
		<div className="app">
			<div className="app_container">
				<div className="app_heading">
					<h1>TODO</h1>
					<span>
						<img
							src={mode ? dark : light}
							alt="mode"
							onClick={handleModeChange}
						/>
					</span>
				</div>
				<TodoForm />
				<div className="app_status">
					{todos.length > 0 && filters === "all"
						? todos.map((todo) => {
								return (
									<TodoItem
										id={todo.id}
										title={todo.title}
										completed={todo.completed}
									/>
								);
						  })
						: null}
					{todos.length > 0 && filters === "active"
						? todos.map((todo) => {
								return (
									todo.completed === false && (
										<TodoItem
											id={todo.id}
											title={todo.title}
											completed={todo.completed}
										/>
									)
								);
						  })
						: null}
					{todos.length > 0 && filters === "completed"
						? todos.map((todo) => {
								return (
									todo.completed === true && (
										<TodoItem
											id={todo.id}
											title={todo.title}
											completed={todo.completed}
										/>
									)
								);
						  })
						: null}
				</div>
				<div className="app_info">
					<p>{itemsLeft.length} items left</p>
					<div>
						<p
							className={filters === "all" && "active_filter"}
							onClick={() => setFilters("all")}>
							All
						</p>
						<p
							className={filters === "active" && "active_filter"}
							onClick={() => setFilters("active")}>
							Active
						</p>
						<p
							className={filters === "completed" && "active_filter"}
							onClick={() => setFilters("completed")}>
							Completed
						</p>
					</div>
					<p onClick={clearCompleted}>Clear Completed</p>
				</div>
			</div>
		</div>
	);
}

export default App;
