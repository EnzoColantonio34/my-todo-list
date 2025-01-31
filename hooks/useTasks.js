import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Hook personnalisé pour la gestion des tâches
 * @returns {Object} Fonctions et états pour gérer les tâches
 */
export const useTasks = () => {
  // États
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    }
  };

  const updateTaskList = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      setTasks(newTasks);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  // Charger au démarrage
  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = () => {
    if (task.trim().length > 0) {
      const newTask = {
        key: Date.now().toString(),
        value: task.trim(),
        completed: false,
        description: '',
        createdAt: new Date().toISOString()
      };
      updateTaskList([...tasks, newTask]);
      setTask('');
    }
  };

  const updateTask = async (updatedTask) => {
    const newTasks = tasks.map(t => 
      t.key === updatedTask.key 
        ? { ...t, ...updatedTask }
        : t
    );
    await updateTaskList(newTasks);
  };

  const toggleTaskCompletion = async (key) => {
    const newTasks = tasks.map(task => 
      task.key === key 
        ? { ...task, completed: !task.completed }
        : task
    );
    updateTaskList(newTasks);
  };

  const deleteTask = async (key) => {
    const newTasks = tasks.filter(task => task.key !== key);
    updateTaskList(newTasks);
  };

  const deleteCompletedTasks = async () => {
    const newTasks = tasks.filter(task => !task.completed);
    await updateTaskList(newTasks);
  };

  return {
    task,
    setTask,
    tasks,
    addTask,
    updateTask,
    toggleTaskCompletion, 
    deleteTask,
    deleteCompletedTasks,
    loadTasks
  };
};