import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function Item({
    task,
    time,
    selected,
    done,
    id,
    selectTask, }: Props) {
    return (
        <li
            className={`${style.item} ${selected ? style.selectedItem : ''} ${done ? style.itemDone : ''}`}
            onClick={() => !done && selectTask(
                {
                    task,
                    time,
                    selected,
                    done,
                    id
                }
            )} >
            <h3> {task}</h3>
            <span>{time}</span>
            {done && <span className={style.done}
                aria-label="Task finished!"></span>}
        </li >
    )
}