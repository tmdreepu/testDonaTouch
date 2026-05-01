import { View, TextInput } from 'react-native'
import React, { memo } from 'react'
import { Text } from 'react-native-paper'
import Colors from '../utils/colors'

const CustomTextInput = ({ placeholder, label, keyboardType, labelStyle, multiline = false, numberOfLines, textAlignVertical, textInputStyle, onChangeText, value, error, editable = true, maxLength }) => {
  return (
    <View>
      {label && <Text variant="labelLarge" style={[{ marginBottom: 10 }, labelStyle]}>{label}</Text>}
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={[{ borderWidth: 1, borderRadius: 10, height: 52, borderColor: error ? Colors.error : Colors.border, backgroundColor: Colors.background, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 12, opacity: !editable ? 0.5 : 1 , color:'#000'}, textInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        keyboardType={keyboardType || 'default'}
        textAlignVertical={textAlignVertical}
        onChangeText={onChangeText}
        value={value}
        editable={editable}
        maxLength={maxLength}
      />
      {
        error && <Text variant="labelLarge" style={[{ color: Colors.error }, labelStyle]}>{error}</Text>
      }
    </View>
  )
}

export default memo(CustomTextInput)