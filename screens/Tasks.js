import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';

//Components Import
import {Search, TodoCategory, Button} from '../components';

//Styles Import
import {task} from '../styles/screens';

import {useEffect} from 'react';

const Tasks = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('http://192.168.56.1:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={task.container}>
      <Search />
      <ScrollView>
        {posts.map(post => {
          return (
            <TodoCategory
              key={post._id}
              title={post.title}
              btnClick={() => navigation.navigate('Todo', {id: post._id})}
            />
          );
        })}
      </ScrollView>
      <View style={task.btnContainer}>
        <Button
          label={'AddTask'}
          btnClick={() => navigation.navigate('AddTask')}
        />
      </View>
    </View>
  );
};
export default Tasks;
