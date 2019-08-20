import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validationText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default style;
