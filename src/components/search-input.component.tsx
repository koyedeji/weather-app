import React, { useState } from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  StyleSheet,
} from 'react-native';

interface SearchInputProps {
  onSubmit: (term: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  onSubmit,
  placeholder,
}: SearchInputProps): JSX.Element => {
  const [term, setTerm] = useState<string>('');

  const handleSubmit = (
    text: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    if (!text) return;

    onSubmit(term);
    setTerm('');
  };

  return (
    <View style={[styles.container]}>
      <TextInput
        autoCorrect={false}
        underlineColorAndroid='transparent'
        placeholderTextColor='white'
        clearButtonMode='always'
        style={[styles.inputStyle]}
        placeholder={placeholder}
        onSubmitEditing={handleSubmit}
        onChangeText={setTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'white',
    height: 40,
    marginVertical: 20,
    width: 300,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    alignItems: 'center',

    fontSize: 24,
  },
});
