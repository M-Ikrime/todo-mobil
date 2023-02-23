import {StyleSheet} from 'react-native';

const todo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dad7db',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 10,
  },
  todoContainer: {
    marginTop: 10,
    width: 320,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  todoText: {
    padding: 10,
    color: 'black',
  },
  deleteBtn: {
    marginTop: 30,
  },
});
export default todo;
