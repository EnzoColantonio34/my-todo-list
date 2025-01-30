import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import ProgressBar from './ProgressBar';
import { useTasks } from '../hooks/useTasks';
import styles from '../styles/styles';

const TaskManager = () => {
  const { 
    tasks, 
    task, 
    setTask,
    setTasks,
    addTask, 
    toggleTaskCompletion, 
    deleteTask,
    deleteCompletedTasks 
  } = useTasks();

  const calculateProgress = () => {
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter(task => task.completed).length;
    return (completedTasks / tasks.length) * 100;
  };

  const hasCompletedTasks = tasks.some(task => task.completed);

  const [selectedTask, setSelectedTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTaskPress = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map(task => 
      task.key === updatedTask.key ? updatedTask : task
    );
    setTasks(newTasks);
  };

  return (
    <View style={{ width: '100%', flex: 1 }}>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <ProgressBar progress={calculateProgress()} />
      <TaskList 
        tasks={tasks} 
        toggleTaskCompletion={toggleTaskCompletion} 
        deleteTask={deleteTask} 
        onTaskPress={handleTaskPress}
      />
      <TaskDetails
        visible={modalVisible}
        task={selectedTask}
        onClose={() => setModalVisible(false)}
        onUpdateTask={updateTask}
      />
      {hasCompletedTasks && (
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