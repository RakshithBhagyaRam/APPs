import {View, StyleSheet, TextInput, Text} from 'react-native';

import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeHolder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onBlur, onChange}, fieldState: {error}}) => (
        <>
          <View
            style={
              error
                ? [styles.container, {borderColor: 'red'}]
                : styles.container
            }>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeHolder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={styles.errorMessage}>
              {error.message || `Error: Enter a valid ${name}`}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {},
  errorMessage: {
    color: 'red',
  },
});
