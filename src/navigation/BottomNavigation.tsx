import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR, SECONDAY_COLOR } from "../utils/constants";
import Tasks from "../screens/Tasks";
import Settings from "../screens/Settings";


export type routeParams = {
    task: undefined
    add: undefined
    settings: undefined
}


const Tab = createBottomTabNavigator<routeParams>();


export const BottomNavigation = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                
                tabBarIcon: ({ focused, color, size }) => {
                switch (route.name) {
                    case 'task':
                        return <Ionicons name={'calendar-outline'} size={size} color={color} />;
                        break;
                    case 'add':
                        return <Ionicons name={'add-circle-outline'} size={size} color={color} />;
                        break;
                    case 'settings':
                        return <Ionicons name={'settings-outline'} size={size} color={color} />;
                        break;
                
                    default:
                        break;
                }
                
             },
                tabBarActiveTintColor: PRIMARY_COLOR,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="task" options={{
                title: "Mes tâches",
                headerTitleStyle: {
                    color : "#fff"
                },
                headerStyle: {
                    backgroundColor: PRIMARY_COLOR,
                    elevation: 5,

                }, 
                
            }} component={Tasks}/>
            <Tab.Screen name="add" options={{
                title: "Ajouter",
                headerTitleStyle: {
                    color : "#fff"
                },
                headerStyle: {
                    backgroundColor: PRIMARY_COLOR,
                    elevation: 5

                }, 
            }} component={Tasks} />
            <Tab.Screen name="settings" options={{
                title: "Paramètres",
                headerTitleStyle: {
                    color : "#fff"
                },
                headerStyle: {
                    backgroundColor: PRIMARY_COLOR,
                    elevation: 5
                }, 
            }} component={Settings} />


        </Tab.Navigator>
       
    );
};