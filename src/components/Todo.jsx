import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Изучить Next", isDone: true },
    { id: "task-2", title: "Сделать проект на Next", isDone: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all?');

    if (isConfirmed) {
      setTasks([]);
    }
  }

  const deleteTask = (taskId) => {
    const isConfirmed = confirm(`Are you sure you want to delete task?`);
    if (isConfirmed) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  }

  const toggleTaskComlete = (taskId, isDone) => {
    console.log(`Task ${taskId} ${isDone ? 'done' : 'is not done'}`)
  }

  const filterTasks = (query) => {
    console.log('Search', query)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDOne: false,
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('');
    }
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask} 
        newTaskTitle={newTaskTitle} 
        setNewTaskTitle={setNewTaskTitle}
      />
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
