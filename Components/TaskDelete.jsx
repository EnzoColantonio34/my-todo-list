import { Alert } from 'react-native';

const confirmDeleteTask = (key, deleteTask) => {
  Alert.alert(
    "Supprimer la tâche",
    "Êtes-vous sûr de vouloir supprimer cette tâche ?",
    [
      {
        text: "Annuler",
        style: "cancel"
      },
      {
        text: "Supprimer",
        onPress: () => deleteTask(key),
        style: "destructive"
      }
    ],
    { cancelable: true }
  );
};

export { confirmDeleteTask };
