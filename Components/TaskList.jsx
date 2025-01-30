import React from 'react';
import { FlatList, View } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, onTaskPress }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          onTaskPress={onTaskPress}
        />
      )}
      keyExtractor={item => item.key}
    />
  );
};

export default TaskList;
