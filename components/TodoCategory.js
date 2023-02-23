import {View, Text, TouchableOpacity} from 'react-native';

//Styles Import
import {todoCategory} from '../styles/components';
const TodoCategory = ({title, btnClick}) => {
  return (
    <TouchableOpacity onPress={btnClick}>
      <View style={todoCategory.container}>
        <Text style={todoCategory.title}>{title}</Text>
        <View style={todoCategory.cizgi}></View>
      </View>
    </TouchableOpacity>
  );
};
export default TodoCategory;
