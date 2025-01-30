import React from 'react';
import { FlatList, View } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      )}
      keyExtractor={item => item.key}
    />
  );
};

export default TaskList;
