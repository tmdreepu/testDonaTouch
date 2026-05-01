import React, { memo } from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native-paper";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CustomGradientButton = ({
    title,
    onPress,
    colors = ["#e57076", "#e86f75", "#ec505a"],
    disabled = false,
    loading = false,
    style,
    textStyle,
    linearBtnStyle,
    icon,
    iconColor,
    variant,
    iconSize
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={style}
        >
            <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.button, linearBtnStyle, disabled && styles.disabled]}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text variant={variant || "bodyLarge"} style={[styles.text, textStyle]}>{title}</Text>
                )}
                {icon && <FontAwesome name={icon} size={iconSize || 24} color={iconColor} />}
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default memo(CustomGradientButton);


const styles = StyleSheet.create({
    button: {
        height: 48,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    text: {
        color: "#fff",
    },
    disabled: {
        opacity: 0.6,
    },
});