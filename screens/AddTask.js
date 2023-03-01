import {View, Text, TextInput} from 'react-native';

//Styles Import
import {addTask} from '../styles/screens';

//Axios Import
import axios from 'axios';
//Components Import
import {Button} from '../components';
import {useEffect, useState} from 'react';
const AddTask = ({route, navigation}) => {
  const [title, setTitle] = useState(['']);
  const [content, setContent] = useState(['']);

  useEffect(() => {}, []);

  const newPost = () => {
    const body = {
      title: title,
      content: content,
    };
    axios
      .post('http://192.168.56.1:5000/api/posts', body)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={addTask.container}>
      <TextInput
        placeholder="Title"
        style={addTask.titleInput}
        onChangeText={val => setTitle(val)}></TextInput>
      <TextInput
        multiline={true}
        numberOfLines={15}
        textAlignVertical={'top'}
        placeholder="Todo"
        style={addTask.todoInput}
        onChangeText={val => setContent(val)}></TextInput>
      <View style={addTask.btn}>
        <Button
          label={'AddTask'}
          btnClick={() => navigation.navigate('Tasks', newPost())}
        />
      </View>
    </View>
  );
};
export default AddTask;
