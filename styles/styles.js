import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Style du conteneur principal de l'application
  container: {
    flex: 1,
    backgroundColor: '#fffefc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 100,
  },

  // Style du titre principal
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  // Conteneur pour la zone de saisie des tâches
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  // Style du champ de saisie
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  // Style d'une tâche individuelle dans la liste
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    fontSize: 18,
    width: '100%',
  },

  // Style du texte d'une tâche
  taskText: {
    marginLeft: 10,
    fontSize: 18,
  },

  // Style du texte pour une tâche complétée
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#d3d3d3',
  },

  // Style du bouton de suppression des tâches complétées
  deleteButton: {
    position: 'absolute',
    bottom: 30,
    right: 1,
    backgroundColor: '#dc3545',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  // Style du texte du bouton de suppression
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Conteneur de la barre de progression
  progressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  // Style du conteneur externe de la barre de progression
  progressContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
  },

  // Style de la barre de progression elle-même
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },

  // Style du texte indiquant le pourcentage de progression
  progressText: {
    fontSize: 14,
    color: '#666',
    minWidth: 40,
  },

  // Style de la modale en plein écran
  modalFullScreen: {
    flex: 1,
    backgroundColor: 'white',
  },

  // Style de l'en-tête de la modale
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  // Style du corps de la modale
  modalBody: {
    padding: 15,
  },

  // Style du titre dans la modale
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 100,
  },

  // Style des étiquettes dans la modale
  modalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
    marginTop: 20,
  },

  // Style du texte dans la modale
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },

  // Style du bouton de fermeture
  closeButton: {
    padding: 10,
  },

  // Style du texte du bouton de fermeture
  closeButtonText: {
    fontSize: 24,
    color: '#666',
  },

  // Style du champ de saisie du titre
  titleInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
  },

  // Style du champ de saisie de la description
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    minHeight: 100,
    textAlignVertical: 'top',
    fontSize: 16,
  },

  // Style du bouton d'ajout
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Style du texte du bouton d'ajout
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  // Style pour le conteneur du label et du switch
  labelSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginVertical: 8,
  },

  // Style pour le conteneur du Switch
  switchContainer: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], 
    marginLeft: 5,
  },

  // Style pour le texte de la date sélectionnée
  selectedDateText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    marginLeft: 10, // Added marginLeft to place it to the right of showdatepicker
  },
});