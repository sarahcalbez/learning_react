import style from './List.module.scss';
import Item from './Item';

function List() {
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Javascript',
        time: '01:00:00'
    }, {
        task: 'Typescript',
        time: '03:00:00'
    }]

    return (
        <aside className={style.tasksList}>
            <h2>What to learn today?</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}
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