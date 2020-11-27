export function pinTask(id, tasks, setTasks) {

    const newTaskArray = tasks.map((task) => (id === task.id ? Object.assign(Object.assign({}, task), { state: "TASK_PINNED" }) : task));

    setTasks(newTaskArray);

}

export function archiveTask(id, tasks, setTasks) {

    const newTaskArray = tasks.map((task) => (id === task.id ? Object.assign(Object.assign({}, task), { state: "TASK_ARCHIVED" }) : task));

    setTasks(newTaskArray);

}

