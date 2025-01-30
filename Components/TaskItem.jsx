import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../styles/styles';
import { confirmDeleteTask } from './TaskDelete';

const TaskItem = ({ item, toggleTaskCompletion, deleteTask }) => {
  return (
    <TouchableOpacity
      onLongPress={() => confirmDeleteTask(item.key, deleteTask)}
      onPress={() => toggleTaskCompletion(item.key)}
      style={styles.task}
    >
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTaskCompletion(item.key)}
      />
      <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
        {item.value}
      </Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
