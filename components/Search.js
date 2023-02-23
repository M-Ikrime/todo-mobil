import {View, Text, TextInput, Image} from 'react-native';

//Styles Import
import {search} from '../styles/components';
//Icon Import
import icon from '../assets/icons/searchIcon2.png';
const Search = () => {
  return (
    <View style={search.container}>
      <TextInput placeholder="Search" style={search.input}></TextInput>
    </View>
  );
};
export default Search;
