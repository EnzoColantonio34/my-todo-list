import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
  },
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
});