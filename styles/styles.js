import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%', // Ensure the container takes the full width
  },
  input: {
    flex: 1,
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    width: 45, // Set the width of the button
    height: 45, // Set the height of the button
    borderRadius: 25, // Make the border radius half of the width/height to make it round
    alignItems: 'center',
    justifyContent: 'center', // Center the text inside the button
    marginLeft: 10, // Add some space between the input and the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 24, // Increase the font size for better visibility
    fontWeight: 'bold', // Make the text bold
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    fontSize: 18,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
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
});