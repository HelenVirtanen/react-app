import { useContext, useState } from "react";
import Field from "./Field";
import Button from "./Button";
import { TasksContext } from "../context/TasksContext";

const AddTaskForm = () => {
  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef
  } = useContext(TasksContext);

  const [error, setError] = useState('');

  const clearNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitle = clearNewTaskTitle.length === 0;

  const onSubmit = (event) => {
    event.preventDefault()

    if (!isNewTaskTitle) {
    addTask(clearNewTaskTitle);
    }
  }

  const onInput = (event) => {
    const { value } = event.target;
    const clearValue = value.trim();
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0;
    setNewTaskTitle(value);
    setError(hasOnlySpaces ? "The task cannot be empty" : '');
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field 
        className="todo__field"
        label="New task title"
        id="new-task"
        ref={newTaskInputRef}
        value={newTaskTitle}
        error={error}
        onInput={onInput}
      />
      <Button 
        type="submit"
        isDisabled={newTaskTitle.trim().length === 0}>Add</Button>
    </form>
  );
};

export default AddTaskForm;
