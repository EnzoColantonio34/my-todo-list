import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },


  // =============== Input texte =============== 
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#fff',
  },


  // =============== Bouton "+" (créer une tâche) =============== 
  button: {
    backgroundColor: '#007BFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    fontSize: 18,
    width: '100%',
  },
  taskText: {
    marginLeft: 10,
    fontSize: 18,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#d3d3d3',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007BFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },


  // =============== Bouton "Supprimer" =============== 
  floatingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
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
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },


  // =============== Barre de progression (ProgressBar) =============== 
  progressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  progressContainer: {
    flex: 1,
    height: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'rgb(30, 200, 98)',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(30, 200, 98)',
    minWidth: 40,
  },
});