import './App.css';
import TaskView from "./components/task-view";
import Header from "./components/header";

function App() {

    return (
        <div className="App">
            <Header/>
            <TaskView/>
        </div>
    );
}

export default App;