import {View, Text, TouchableOpacity} from 'react-native';

//Styles Import
import button from '../styles/components/button';
const Button = ({label, btnClick}) => {
  return (
    <TouchableOpacity onPress={btnClick}>
      <View style={button.container}>
        <Text style={button.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
