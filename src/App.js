import './App.css';
import {AddTask, Footer, Header, ShowTask} from "./components";
import {useState} from "react";


function App() {
    const [taskList, setTaskList] = useState([]);

    return (
        <div className="App">
            <Header/>
            <AddTask taskList={taskList} setTaskList={setTaskList}/>
            <ShowTask taskList={taskList} setTaskList={setTaskList}/>
            <Footer/>
        </div>
    );
}

export default App;
