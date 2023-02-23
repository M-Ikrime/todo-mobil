import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tasks, AddTask, Todo} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen name="AddTask" component={AddTask} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Todo" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
