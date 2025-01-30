import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { useTasks } from '../hooks/useTasks';
import styles from '../styles/styles';

const TaskManager = () => {
  const {
    task,
    setTask,
    tasks,
    showButton,
    deleteTask,
    addTask,
    toggleTaskCompletion,
    deleteCompletedTasks
  } = useTasks();

  return (
    <View>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      {showButton && (
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={deleteCompletedTasks}
        >
          <Text style={styles.deleteButtonText}>Supprimer les tâches terminées</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskManager;