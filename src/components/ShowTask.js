export const ShowTask = () => {
    const tasks = [
        {id:1000,name:"Task 1", time:"1234"},
        {id:2000,name:"Task 2", time:"2222"},
        {id:3000,name:"Task 3", time:"4444"},
    ]

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">0</span>
                </div>
                <button className="clearAll">Clear All</button>
            </div>
            <ul>
                {tasks.map((task)=>(
                    <li>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i className="bi bi-pencil-square"></i>
                        <i className="bi bi-trash"></i>
                    </li>
                ))}


            </ul>
        </section>
    )
}
