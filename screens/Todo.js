import {View, Text} from 'react-native';
import axios from 'axios';
//Styles Import
import {todo} from '../styles/screens';
//Components Import
import {Button} from '../components';
import {useState} from 'react';
import {useEffect} from 'react';

const Todo = () => {
  const [postDetail, setPostDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.56.1:5000/api/posts/`)
      .then(response => setPostDetail(response.data))
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <View style={todo.container}>
      <Text style={todo.title}>Todo</Text>
      <View style={todo.todoContainer}>
        <Text style={todo.todoText}>asdafsd</Text>
      </View>
      <View style={todo.deleteBtn}>
        <Button label={'Delete'} />
      </View>
    </View>
  );
};

export default Todo;
