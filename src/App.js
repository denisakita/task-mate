import './App.css';
import {AddTask, Footer, Header, ShowTask} from "./components";
import {useEffect, useState} from "react";


function App() {
    const [taskList, setTaskList] = useState([JSON.parse(localStorage.getItem("taskList")) || []]);
    const [task, setTask] = useState({});

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList])
    return (
        <div className="App">
            <Header/>
            <AddTask
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
            />
            <ShowTask
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
            />
            <Footer/>
        </div>
    );
}

export default App;
