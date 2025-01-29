import { Image, StyleSheet, Text, View } from "react-native"
import { FokusButton } from "../components/FokusButton"
import { router } from "expo-router"
import { IconPlus } from "../components/Icons"
import { Heading } from "../components/Heading"
import { Todo } from "../components/ToDo"

export default function TooList() {

    return (
        <View
            style={styles.container}
        >
            <Heading text="Lista de tarefas:" />

            <View style={{ width: '80%', gap: 40 }}>

                <View style={{ gap: 8 }}>
                    <Todo text="Estudar React" completed />
                    <Todo text="Estudar React Native" />
                </View>

                <FokusButton 
                    title="Adicionar nova tarefa" 
                    onPress={() => router.push('/todo-form')} 
                    icon={<IconPlus />}
                    outline
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#021123',
        gap: 32
    }
})