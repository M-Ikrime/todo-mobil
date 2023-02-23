import {View, Text, TextInput} from 'react-native';

//Styles Import
import {addTask} from '../styles/screens';

//Components Import
import {Button} from '../components';
const AddTask = () => {
  return (
    <View style={addTask.container}>
      <TextInput placeholder="Title" style={addTask.titleInput}></TextInput>
      <TextInput
        multiline={true}
        numberOfLines={15}
        textAlignVertical={'top'}
        placeholder="Todo"
        style={addTask.todoInput}></TextInput>
      <View style={addTask.btn}>
        <Button label={'AddTask'} />
      </View>
    </View>
  );
};
export default AddTask;
