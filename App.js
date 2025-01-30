import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import styles from './styles/styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

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
    setTasks(tasks.map(task => 
      task.key === key ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma Todo List</Text>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      <StatusBar style="auto" />
    </View>
  );
}
