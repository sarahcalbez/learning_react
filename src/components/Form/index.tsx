import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ITask } from "../../types/tasks";
import Button from "../Button";
import style from './Form.module.scss';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");
    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    task,
                    time,
                    selected: false,
                    done: false,
                    id: uuidv4()
                }])
        setTask("");
        setTime("00:00");

    }
    return (
        <form className={style.newTask} onSubmit={addTask}>

            <div className={style.inputContainer}>
                <label>
                    Add a new task
                </label>
                <input
                    type="text"
                    name="task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    id="task"
                    placeholder="What you want to learn?"
                    required>
                </input>
            </div>

            <div className={style.inputContainer}>
                <label>
                    Time
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required>
                </input>
            </div>
            <Button type="submit">
                Create
            </Button>
        </form>
    )
}

export default Form;