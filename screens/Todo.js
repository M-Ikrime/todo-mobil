import {View, Text} from 'react-native';
import axios from 'axios';
//Styles Import
import {todo} from '../styles/screens';
//Components Import
import {Button} from '../components';
import {useState} from 'react';
import {useEffect} from 'react';

const Todo = ({route}) => {
  const [postDetail, setPostDetail] = useState([]);
  useEffect(() => {
    const {id} = route.params;

    axios
      .get(`http://192.168.56.1:5000/api/posts/${id}`)
      .then(response => {
        setPostDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <View style={todo.container}>
      <Text style={todo.title}>{postDetail.title}</Text>
      <View style={todo.todoContainer}>
        <Text style={todo.todoText}>{postDetail.content}</Text>
      </View>
      <View style={todo.deleteBtn}>
        <Button label={'Delete'} />
      </View>
    </View>
  );
};

export default Todo;
