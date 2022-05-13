import { StyleSheet } from 'react-native';

const FormStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
    // backgroundColor: 'yellow',
  },
  label: {
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 1.5,
  },
  inputField: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'blue',
  },
  icon: {
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: 8,
    // backgroundColor: 'orange',
  },
  error: {
    color: 'red',
    paddingTop: 10,
    // backgroundColor: 'pink',
  },
});

export default FormStyles;
