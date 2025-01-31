import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const TaskItem = React.memo(({ item, toggleTaskCompletion, onTaskPress }) => {
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
});

TaskItem.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  onTaskPress: PropTypes.func.isRequired,
};

export default TaskItem;
