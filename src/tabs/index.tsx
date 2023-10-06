import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from "./home";
import Consultas from "./consultas";
import Explorar from "./explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

export default function Tabs(){
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: "#002851"
            },
            tabBarActiveTintColor: "#339CFF",
            tabBarInactiveTintColor: "#FFF"
        }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => ( <Ionicons name="home" color={color} size={size} /> 
                    )
                }} />
            <Tab.Screen 
                name="Consultas" 
                component={Consultas} 
                options={{
                    headerShown: false, 
                    tabBarIcon: ({ color, size }) => ( <Ionicons name="calendar" color={color} size={size} /> 
                    )
                }} />
                <Tab.Screen 
                name="Explorar" 
                component={Explorar} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => ( <Ionicons name="search" color={color} size={size} /> 
                    )
                }} />
                <Tab.Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => ( <Ionicons name="person" color={color} size={size} /> 
                    )
                }} />
        </Tab.Navigator>
        
    )
}