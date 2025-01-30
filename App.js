import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import TaskManager from './Components/TaskManager';
import styles from './styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma Todo List</Text>
      <TaskManager />
      <StatusBar style="auto" />
    </View>
  );
}