import {View, TextInput} from 'react-native';
import axios from 'axios';
//Styles Import
import {todo} from '../styles/screens';
import {addTask} from '../styles/screens';
//Components Import
import {Button} from '../components';
import {useState} from 'react';
import {useEffect} from 'react';
const Todo = ({route, navigation}) => {
  const [postDetail, setPostDetail] = useState([]);
  const [title, setTitle] = useState(['']);
  const [content, setContent] = useState(['']);
  const {id} = route.params;

  useEffect(() => {
    axios
      .get(`http://192.168.56.1:5000/api/posts/${id}`)
      .then(response => {
        setPostDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const deletePost = () => {
    axios.delete(`http://192.168.56.1:5000/api/posts/${id}`);
  };
  /** 
  const fortmatResponse = res => {
    return JSON.stringify(res, null, 2);
  };
  */

  const updatePost = async () => {
    fetch(`http://192.168.56.1:5000/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });

    /** 
    const body = {
      title: title,
      content: content,
    };
    try {
      const res = await axios.put(
        `http://192.168.56.1:5000/api/posts/${id}`,
        body,
        {
          headers: {
            'x-access-token': 'token-value',
          },
        },
      );
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      setPostDetail(fortmatResponse(result));
    } catch (error) {}
    */
  };

  return (
    <View style={todo.container}>
      <TextInput
        placeholder="Title"
        style={addTask.titleInput}
        onChangeText={val => setTitle(val)}>
        {postDetail.title}
      </TextInput>
      <TextInput
        multiline={true}
        numberOfLines={15}
        textAlignVertical={'top'}
        placeholder="Todo"
        style={addTask.todoInput}
        onChangeText={val => setContent(val)}>
        {postDetail.content}
      </TextInput>

      <View style={todo.deleteBtn}>
        <Button
          label={'Update'}
          btnClick={() => navigation.navigate('Tasks', updatePost())}
        />
        <Button
          label={'Delete'}
          btnClick={() => navigation.navigate('Tasks', deletePost())}
        />
      </View>
    </View>
  );
};

export default Todo;

/**
 * 
 * <Text style={todo.title}>{postDetail.title}</Text>
      <View style={todo.todoContainer}>
        <Text style={todo.todoText}>{postDetail.content}</Text>
       </View>
      
 */
