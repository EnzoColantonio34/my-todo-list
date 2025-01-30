import { useState } from 'react';

export const useTasks = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const deleteTask = (key) => {
    setTasks(tasks.filter(task => task.key !== key));
  };

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: tasks.length.toString(), value: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (key) => {
    const updatedTasks = tasks.map(task => 
      task.key === key ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setShowButton(updatedTasks.some(task => task.completed));
  };

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
    setShowButton(false);
  };

  return {
    task,
    setTask,
    tasks,
    showButton,
    deleteTask,
    addTask,
    toggleTaskCompletion,
    deleteCompletedTasks
  };
};