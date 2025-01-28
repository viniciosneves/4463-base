import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon, outline = false }) => {
    return (
        <Pressable
            style={[
                styles.button,
                outline && styles.outlineButton
            ]}
            onPress={onPress}
        >
            {icon}
            <Text
                style={[
                    styles.buttonText,
                    outline && styles.outlineButtonText
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B872FF',
        borderRadius: 32,
        padding: 8,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#B872FF',
    },
    buttonText: {
        textAlign: 'center',
        color: '#021123',
        fontSize: 18,
    },
    outlineButtonText: {
        color: '#B872FF',
    },
});
