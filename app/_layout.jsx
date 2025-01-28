import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#021123' },
          headerTintColor: '#FFF',
          drawerStyle: { backgroundColor: '#021123' },
          drawerLabelStyle: { color: "#FFF" },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{
            drawerLabel: "Timer",
            title: ""
          }}
        />
        <Drawer.Screen
          name="todo-list"
          options={{
            drawerLabel: "Lista de tarefas",
            title: ""
          }}
        />
        <Drawer.Screen
          name="todo-form"
          options={{
            drawerItemStyle: { display: "none" },
            title: "",
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
                color="#FFFFFF"
                style={{ marginLeft: 16 }}
                onPress={() => router.push('/todo-list')}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
