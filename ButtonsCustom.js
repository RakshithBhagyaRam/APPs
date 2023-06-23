import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const CustomButton = ({children, onPress, type}) => {
  const {width} = useWindowDimensions();

  return (
    <Pressable
      android_ripple={{color: '#ccc'}}
      onPress={onPress}
      style={[styles.button, {width: width < 1280 ? '80%' : '40%'}]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cccc',

    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#3675d4',

    alignItems: 'center',
    elevation: 5,
  },
  text: {
    color: 'white',
    // textAlign: 'center',
  },
  forgotPassword: {
    color: 'black',
  },
});
