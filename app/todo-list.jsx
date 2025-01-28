import { Image, StyleSheet, Text, View } from "react-native"
import { FokusButton } from "../components/FokusButton"
import { router } from "expo-router"
import { IconPlus } from "../components/Icons"

export default function TooList() {

    return (
        <View
            style={styles.container}
        >

            <FokusButton 
                title="Adicionar nova tarefa" 
                onPress={() => router.push('/todo-form.jsx')} 
                icon={<IconPlus />}
                outline
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#021123'
    }
})