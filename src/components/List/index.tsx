import style from './List.module.scss';
import Item from './Item';
import { ITask } from '../../types/tasks';


interface Props {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.tasksList}>
            <h2>What to learn today?</h2>
            <ul>
                {tasks.map((item) => (
                    <Item
                    selectTask={selectTask}
                        key={item.id}
                        {...item}
                    // task={item.task}
                    // time={item.time}
                    // This way is better is you're using an API
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;