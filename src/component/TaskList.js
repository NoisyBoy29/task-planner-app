import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
const TaskList = ({taskRefresh, setRefresh}) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // memanggil API untuk mengambil data tasks
    if (taskRefresh) {
      fetch("http://localhost:8000/tasks")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRefresh(false)
          // ketika Rest API sukses, simpan data dari response ke dalam state lokal
          setTasks(data);
        })
        .catch((err) => {
          setRefresh(false)
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }
  }, [taskRefresh, setRefresh]);
  return (
    <ul id="task-list">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} setRefresh={setRefresh} />
      ))}
    </ul>
  );
};
export default TaskList;