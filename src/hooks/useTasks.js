import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import useTasksLocalStorage from "./useTasksLocalStorage";

const useTasks = () => {
  const { savedTasks, saveTasks } = useTasksLocalStorage();
  const [tasks, setTasks] = useState(
    savedTasks ?? [
      { id: "task-1", title: "Изучить Next", isDone: true },
      { id: "task-2", title: "Сделать проект на Next", isDone: false },
    ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure you want to delete all?");

    if (isConfirmed) {
      setTasks([]);
    }
  }, []);

  const deleteTask = useCallback(
    (taskId) => {
      const isConfirmed = confirm(`Are you sure you want to delete task?`);
      if (isConfirmed) {
        setTasks(tasks.filter((task) => task.id !== taskId));
      }
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone };
          }

          return task;
        }),
      );
    },
    [tasks],
  );

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDOne: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current.focus();
    }
  }, [newTaskTitle]);

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks, saveTasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  return {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
  };
};

export default useTasks;
