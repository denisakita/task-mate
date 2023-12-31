import './App.css';
import {AddTask, Footer, Header, ShowTask} from "./components";
import {useState} from "react";


function App() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState({});
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
