import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import { CheckBox } from 'react-native-elements';
import { confirmDeleteTask } from './TaskDelete';

const TaskInput = ({ task, setTask, addTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ajouter une tâche"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const TaskItem = ({ item, toggleTaskCompletion }) => {
  return (
    <TouchableOpacity
      onLongPress={() => confirmDeleteTask(item.key)}
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

export default TaskInput;
export { TaskItem };