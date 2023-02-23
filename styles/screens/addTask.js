import {StyleSheet} from 'react-native';
const addTask = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dad7db',
    alignItems: 'center',
  },
  titleInput: {
    marginTop: 20,
    backgroundColor: 'white',
    width: 320,
    height: 40,
    borderRadius: 10,
    padding: 10,
    fontWeight: '800',
  },
  todoInput: {
    marginTop: 15,
    width: 320,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    marginTop: 35,
  },
});
export default addTask;
