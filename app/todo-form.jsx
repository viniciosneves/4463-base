import { StyleSheet, View } from "react-native";
import { FokusButton } from "../components/FokusButton";

export default function TodoForm() {

    return (
        <View
            style={styles.container}
        >
            <View style={styles.actions}>
                <FokusButton
                    title="Salvar"
                    onPress={() => console.log('submit')}
                    multiline={true}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#021123',
        gap: 40
    },
    actions: {
        paddingVertical: 24,
        paddingHorizontal: 24,
        backgroundColor: '#98A0A8',
        width: '80%',
        borderRadius: 8,
        gap: 32
    }
})