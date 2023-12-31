export const AddTask = ({taskList, setTaskList, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedTaskList = taskList.map((task)=>(
                task.id === task.id ? {id:task.id, name:e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : {task}
            ));
            setTaskList(updatedTaskList);
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask]);
            e.target.task.value = "";
        }


    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" value={task.name} name="task" autoComplete="off" placeholder="add task"
                       maxLength="25"/>
                <button type="submit">Add</button>
            </form>
        </section>
    )
}
