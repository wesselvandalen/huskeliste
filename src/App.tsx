import './App.css';
import TaskView from "./components/task-view";
import Header from "./components/header";

function App() {
    return (
        <div className="App">
            <div className="inner-app">
                <Header/>
                <TaskView/>
            </div>
        </div>
    );
}

export default App;