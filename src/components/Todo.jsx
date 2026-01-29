import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    { id: "task-1", title: "Изучить Next", isDone: true },
    { id: "task-2", title: "Сделать проект на Next", isDone: false },
  ];

  const deleteAllTasks = () => {
    console.log('Delete all tasks')
  }

  const deleteTask = (taskId) => {
    console.log(`Delete task with ${taskId}`)
  }

  const toggleTaskComlete = (taskId, isDone) => {
    console.log(`Task ${taskId} ${isDone ? 'done' : 'is not done'}`)
  }

  const filterTasks = (query) => {
    console.log('Search', query)
  }

  const addTask = () => {
    console.log(`Task was added`);
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo 
        total={tasks.length} 
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList 
        tasks={tasks} 
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComlete}
      />
    </div>
  );
};

export default Todo;
