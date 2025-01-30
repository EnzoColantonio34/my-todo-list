import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../styles/styles';

const TaskItem = ({ item, toggleTaskCompletion, onTaskPress }) => {
  return (
    <View style={styles.task}>
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTaskCompletion(item.key)}
      />
      <TouchableOpacity onPress={() => onTaskPress(item)} style={{ flex: 1 }}>
        <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
          {item.value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
