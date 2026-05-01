import { TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { Text } from 'react-native-paper';

const AmmountButton = ({ text, onPress, isSelected }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: '45%', padding: 12, borderWidth: 3, borderColor: '#fff', borderRadius: 20, backgroundColor: isSelected ? '#ffcc66' : '#fff' }}>
            <Text variant='titleMedium' style={{ textAlign: 'center' }} >{text}</Text>
        </TouchableOpacity>
    )
}

export default memo(AmmountButton);