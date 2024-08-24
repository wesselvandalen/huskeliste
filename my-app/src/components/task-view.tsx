import React, { useState } from "react";
import { Task } from "../model/Task";
import './task-view.css';
import trashcanIcon from '../assets/trashcan.png';
import plussIcon from '../assets/plus.png';

function TaskView() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask !== '') {
            const newId = crypto.randomUUID();
            const newTodoItem = new Task(newId, newTask);
            setTasks([...tasks, newTodoItem]);
            setNewTask('');
        }
    };

    const removeTask = (id: string) => {
        const updatedTasks = tasks.filter((task) => task.getId() !== id);
        setTasks(updatedTasks);
    };

    const toggleComplete = (id: string) => {
        const updatedTasks = tasks.map((task) => {
            if (task.getId() === id) {
                task.switchCompleted();
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="task-view-container">
            <div className="task-view-content">
                <div className="task-input-container">
                    <input
                        className="task-input-field"
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Skriv en ny oppgave"
                    />
                    <button className="task-btn" onClick={addTask}>
                        <img className="small-icon-task" src={plussIcon} alt="Pluss icon" />
                        Legg til
                    </button>
                </div>
                <div className="task-list-container">
                    <ul className="task-list-content">
                        {tasks.map((task) => (
                            <li className="task-element" key={task.getId()}>
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    checked={task.isCompleted()}
                                    onChange={() => toggleComplete(task.getId())}
                                />
                                <span className={task.isCompleted() ? 'completed' : ''}>
                                    {task.getTitle()}
                                </span>
                                <button className="btn" onClick={() => removeTask(task.getId())}>
                                    <img className="small-icon-remove" src={trashcanIcon} alt="Trashcan icon" />
                                    Fjern
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TaskView;