import { StyleSheet } from 'react-native';

/**
 * Styles for the My-Todo-List application.
 */
export default StyleSheet.create({
  /**
   * Container style for the main layout.
   */
  container: {
    flex: 1,
    backgroundColor: '#fffefc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 100,
  },
  /**
   * Style for the title text.
   */
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  /**
   * Container style for the input section.
   */
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  /**
   * Style for the input field.
   */
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
  /**
   * Style for the button.
   */
  button: {
    backgroundColor: '#007BFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  /**
   * Style for the button text.
   */
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  /**
   * Style for each task item.
   */
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    fontSize: 18,
    width: '100%',
  },
  /**
   * Style for the task text.
   */
  taskText: {
    marginLeft: 10,
    fontSize: 18,
  },
  /**
   * Style for completed task text.
   */
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#d3d3d3',
  },
  /**
   * Style for the floating button.
   */
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
  /**
   * Style for the floating button text.
   */
  floatingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  /**
   * Style for the delete button.
   */
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
  /**
   * Style for the delete button text.
   */
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  /**
   * Wrapper style for the progress bar.
   */
  progressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  /**
   * Container style for the progress bar.
   */
  progressContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
  },
  /**
   * Style for the progress bar.
   */
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  /**
   * Style for the progress text.
   */
  progressText: {
    fontSize: 14,
    color: '#666',
    minWidth: 40,
  },
  /**
   * Container style for the modal.
   */
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  /**
   * Content style for the modal.
   */
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  /**
   * Style for the modal title.
   */
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 100,
  },
  /**
   * Style for the modal text.
   */
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  /**
   * Style for the modal button.
   */
  modalButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  /**
   * Style for the modal button text.
   */
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  /**
   * Style for the full-screen modal.
   */
  modalFullScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  /**
   * Style for the modal header.
   */
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  /**
   * Style for the modal body.
   */
  modalBody: {
    padding: 15,
  },
  /**
   * Style for the modal label.
   */
  modalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
    marginTop: 20,
  },
  /**
   * Style for the close button.
   */
  closeButton: {
    padding: 10,
  },
  /**
   * Style for the close button text.
   */
  closeButtonText: {
    fontSize: 24,
    color: '#666',
  },
  /**
   * Style for the date button.
   */
  dateButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  /**
   * Style for the date button text.
   */
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  /**
   * Style for the description input field.
   */
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  /**
   * Container style for the deadline section.
   */
  deadlineContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  /**
   * Style for the title input field.
   */
  titleInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
  },
  /**
   * Style for the add button.
   */
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  /**
   * Style for the add button text.
   */
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});