import { useState } from "react";

const Header = ({setRefresh}) => {
  const [title, setTitle] = useState("");

  // fungsi untuk menambah data task melalui API ketika tombol "Add" di klik
  const addTask = () => {
	  const newTask = {title, done: false}

	  fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(() => {
			// ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
			setTitle("")
			setRefresh(true)

			setTimeout(() => {
				alert('new task added.')
			}, 500)
        });
  }

  return (
    <div id="task-header" className="header">
      <h2>Task Planner</h2>
	  <input 
		  type="text"
		  value={title}
		  onChange={(e) => setTitle(e.target.value)}
	  />
      <span className="add-button" onClick={addTask}>Add</span>
    </div>
  );
};

export default Header;