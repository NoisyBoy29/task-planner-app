import { useState } from "react";
import Header from "./component/Header";
import TaskList from "./component/TaskList";

function App() {

  const [taskRefresh, setTaskRefresh] = useState(true)

  const setRefresh = (status) => {
    setTaskRefresh(status)
  }

  return (
    <div className="App">
      <div className="content">
        <Header setRefresh={setRefresh} />
        <TaskList setRefresh={setRefresh} taskRefresh={taskRefresh} />
      </div>
    </div>
  );
}

export default App;