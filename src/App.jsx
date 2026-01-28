import AddTaskForm from "./components/AddTaskFrom";
import SearchTaskForm from "./components/SearchTaskForm";
import TodoInfo from "./components/TodoInfo";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
      <div className="todo__empty-message"></div>
    </div>
  )
}

export default App