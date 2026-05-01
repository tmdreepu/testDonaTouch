import React, { memo } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text } from 'react-native-paper';
import Colors from '../utils/colors';

const CustomInputWithIcon = ({
    placeholder,
    value,
    onChangeText,
    icon = 'user-o',
    keyboardType = 'default',
    iconColor = Colors.iconColor,
    error,
}) => {
    return (
        <View>
            <View style={[styles.container, { borderColor: error ? Colors.error : Colors.border }]}>
                {/* <AntDesign name={icon} size={24} color="gray" /> */}
                <FontAwesome name={icon} size={24} color={iconColor} />

                <TextInput
                    placeholder={placeholder || "Placeholder"}
                    value={value}
                    style={styles.input}
                    placeholderTextColor={'gray'}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoCapitalize={"none"}
                />
            </View>
            {error && <Text style={{ color: Colors.error }}>{error}</Text>}
        </View>
    )
}

export default memo(CustomInputWithIcon)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: Colors.border,
        backgroundColor: Colors.background,
        height: 48

    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#000'
    },
});