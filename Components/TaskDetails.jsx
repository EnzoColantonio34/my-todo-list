import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, Platform, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/styles';

const TaskDetails = ({ 
  visible = false, 
  task = null, 
  onClose = () => {}, 
  onUpdateTask = () => {},
  textElement = ''
}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [description, setDescription] = useState('');
  const [hasDeadline, setHasDeadline] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    if (task) {
      setTaskTitle(task.value);
      setDescription(task.description || '');
    }
  }, [task]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleTitleSubmit = () => {
    setEditingTitle(false);
    if (onUpdateTask) {
      onUpdateTask({ ...task, value: taskTitle });
    }
  };

  const handleDeadlineChange = () => {
    const newHasDeadline = !hasDeadline;
    setHasDeadline(newHasDeadline);
    if (newHasDeadline) {
      setShowPicker(true);
    }
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
    if (task) {
      onUpdateTask({ ...task, description: text });
    }
  };

  if (!task) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
    >
      <View style={styles.modalFullScreen}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Détails de la tâche</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.modalBody}>
          <Text style={styles.modalLabel}>Tâche</Text>
          {editingTitle ? (
            <TextInput
              style={styles.titleInput}
              value={taskTitle}
              onChangeText={setTaskTitle}
              onBlur={handleTitleSubmit}
              onSubmitEditing={handleTitleSubmit}
              autoFocus
            />
          ) : (
            <TouchableOpacity onPress={() => setEditingTitle(true)}>
              <Text style={styles.modalText}>{taskTitle}</Text>
            </TouchableOpacity>
          )}

          <Text style={styles.modalLabel}>Description</Text>
          <TextInput
            style={styles.descriptionInput}
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={handleDescriptionChange}
            placeholder="Ajouter une description..."
          />

          <Text style={styles.modalLabel}>Statut</Text>
          <Text style={styles.modalText}>
            {task.completed ? 'Terminée ✅' : 'À faire ⌛'}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default TaskDetails;