import React, { useState } from 'react';
import '../src/assets/sass/_app.scss';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import light from './assets/images/icon-sun.svg';
import dark from './assets/images/icon-moon.svg';

function App() {
  const [mode, setMode] = useState(true);
  const handleModeChange = () => {
     setMode(prev => !prev)
	  if(mode) setDarkMode();
	  else setLightMode();
  }

  const setDarkMode = () => {
	document.querySelector("body").setAttribute('data-theme', 'dark');
  }

  const setLightMode = () => {
	document.querySelector("body").setAttribute('data-theme', 'light');
  }




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
						<TodoItem />
						<TodoItem />
						<TodoItem />
						<TodoItem />
					</div>
					<div className="app_info">
						<p>items left</p>
						<div>
							<p>All</p>
							<p>Active</p>
							<p>Completed</p>
						</div>
						<p>Clear Completed</p>
					</div>
				</div>
			</div>
		);
}

export default App;