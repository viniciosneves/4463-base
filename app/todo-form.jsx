import { Pressable, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { IconPlus, IconSave } from "../components/Icons"
import { TextInput } from "react-native-gesture-handler";

export default function TodoForm() {

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.heading}>
                Adicionar tarefa:
            </Text>
            <View style={styles.actions}>
                <Text style={styles.formHeading}>
                    Em que que você está trabalhando?
                </Text>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Descreva aqui a sua tarefa"
                        placeholderTextColor="#514f4f"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Pressable style={styles.button}>
                        <IconSave />
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Salvar</Text>
                    </Pressable>
                </View>
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
    heading: {
        color: '#FFFFFF',
        fontSize: 26,
        textAlign: 'center'
    },
    actions: {
        paddingVertical: 24,
        paddingHorizontal: 24,
        backgroundColor: '#98A0A8',
        width: '80%',
        borderRadius: 8,
        gap: 32
    },
    formHeading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textAreaContainer: {
        borderColor: '#888',
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height: 120,
        justifyContent: "flex-start"
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
})