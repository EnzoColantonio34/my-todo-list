import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles/styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

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
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <CheckBox
              checked={item.completed}
              onPress={() => toggleTaskCompletion(item.key)}
            />
            <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
              {item.value}
            </Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
