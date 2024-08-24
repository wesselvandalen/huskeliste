import React, {useState} from "react";
import {Task} from "../model/Task";

function TaskView() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const addTodo = () => {
        if (newTask !== '') {
            const newId = crypto.randomUUID();
            const newTodoItem = new Task(newId, newTask);
            setTasks([...tasks, newTodoItem]);
            setNewTask('');
        }
    };

    const removeTodo = (id: string) => {
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
        setTasks([...updatedTasks]);
    };

    return (
        <div className="task-view-container">
            <div>
                <h1>Todo App</h1>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.getId()}>
                            <input
                                type="checkbox"
                                checked={task.isCompleted()}
                                onChange={() => toggleComplete(task.getId())}
                            />
                            <span style={{ textDecoration: task.isCompleted() ? 'line-through' : 'none' }}>
                                {task.getTitle()}
                            </span>
                            <button onClick={() => removeTodo(task.getId())}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TaskView;