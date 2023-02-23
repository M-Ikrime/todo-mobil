import {StyleSheet} from 'react-native';
const todoCategory = StyleSheet.create({
  container: {
    width: 320,
    height: 40,
    borderRadius: 10,
    marginTop: 8,
    justifyContent: 'flex-end',
  },
  cizgi: {
    width: 320,
    height: 1,
    backgroundColor: '#8890a6',
  },
  title: {
    color: '#b3b3ba',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 20,
    margin: 7,
  },
});

export default todoCategory;
