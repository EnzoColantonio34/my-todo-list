import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, Platform, TextInput, Keyboard, TouchableWithoutFeedback, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const TaskDetails = ({ 
  visible = false, 
  task = null, 
  onClose = () => {}, 
  onUpdateTask = () => {}
}) => {
  const [description, setDescription] = useState(task ? task.description : '');
  const [editingTitle, setEditingTitle] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task ? task.value : '');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [deadline, setDeadline] = useState(null);

  useEffect(() => {
    if (task) {
      setTaskTitle(task.value);
      setDescription(task.description);
    }
  }, [task]);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedDeadline = await AsyncStorage.getItem('taskDeadline');
        const savedSwitchState = await AsyncStorage.getItem('switchState');
        if (savedDeadline !== null) {
          setDeadline(new Date(savedDeadline));
        }
        if (savedSwitchState !== null) {
          setIsSwitchOn(JSON.parse(savedSwitchState));
        }
      } catch (error) {
        console.error('Failed to load settings.', error);
      }
    };
    loadSettings();
  }, []);

  const handleDateChange = async (event, selectedDate) => {
    if (selectedDate) {
      setDeadline(selectedDate);
      try {
        await AsyncStorage.setItem('taskDeadline', selectedDate.toISOString());
      } catch (error) {
        console.error('Failed to save the deadline.', error);
      }
    }
  };

  const handleTitleSubmit = () => {
    setEditingTitle(false);
    if (onUpdateTask) {
      onUpdateTask({ ...task, value: taskTitle });
    }
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
    if (task) {
      onUpdateTask({ ...task, description: text });
    }
  };

  const toggleSwitch = async () => {
    const newSwitchState = !isSwitchOn;
    setIsSwitchOn(newSwitchState);
    if (!newSwitchState) {
      setDeadline(null);
    }
    try {
      await AsyncStorage.setItem('switchState', JSON.stringify(newSwitchState));
    } catch (error) {
      console.error('Failed to save switch state.', error);
    }
  };

  if (!task) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalFullScreen}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Détails de la tâche</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalBody}>
            <Text style={styles.modalLabel}>Nom de la tâche</Text>
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

            <View style={styles.labelSwitchContainer}>
              <Text style={styles.modalLabel}>Date limite</Text>
              <Switch
                onValueChange={toggleSwitch}
                value={isSwitchOn}
                style={styles.switchContainer}
              />
            </View>

            {isSwitchOn && (
              <>
                <Text style={styles.modalText}>Sélectionnez une date limite pour cette tâche.</Text>
                <DateTimePicker
                  value={deadline || new Date()}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
                <Text style={styles.selectedDateText}>
                  Date sélectionnée: {deadline ? deadline.toLocaleDateString() : 'Aucune date sélectionnée'}
                </Text>
              </>
            )}

            <Text style={styles.modalLabel}>Statut</Text>
            <Text style={styles.modalText}>
              {task.completed ? 'Terminée ✅' : 'À faire ⌛'}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TaskDetails;
