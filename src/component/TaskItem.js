const TaskItem = ({ task, setRefresh }) => {

    const updateTask = () => {
      task.done = !task.done
  
      fetch("http://localhost:8000/tasks/" + task.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      }).then(() => {
        setRefresh(true)
        setTimeout(() => {
            alert('Task has been updated.')
        }, 500)
      })
    }
  
    const deleteTask = () => {
      fetch("http://localhost:8000/tasks/" + task.id, {
        method: "DELETE",
      }).then(() => {
        setRefresh(true)
        setTimeout(() => {
            alert('Task has been deleted.')
        }, 500)
      });
    };
  
    return (
      <li className={`${task.done ? "checked" : ""}`}>
        <div onClick={updateTask}>{task.title}</div> 
        <span className="close" onClick={deleteTask}>x</span>
      </li>
    );
  };
  
  export default TaskItem;