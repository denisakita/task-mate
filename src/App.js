import './App.css';
import {AddTask, Footer, Header, ShowTask} from "./components";


function App() {
    return (
        <div className="App">
            <Header/>
            <AddTask/>
            <ShowTask/>
            <Footer/>
        </div>
    );
}

export default App;
