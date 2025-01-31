import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

const TaskInput = ({ task, setTask, addTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Ajouter une tâche..."
      />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={addTask}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;