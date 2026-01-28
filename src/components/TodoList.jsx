import TodoItem from "./TodoItem";

const TodoList = () => {
  const hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      <TodoItem 
        className="todo__item"
        id="task-1"
        title="Изучить Next" 
        isDone
      />
      <TodoItem 
        className="todo__item"
        id="task-2"
        title="Сделать проект на Next" 
        isDone={false}
      />
    </ul>
  );
};

export default TodoList;
