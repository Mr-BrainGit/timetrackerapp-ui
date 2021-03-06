import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Tasks from "../screens/Tasks";
import { PRIMARY_COLOR } from "../utils/constants";
import { BottomNavigation } from "./BottomNavigation";

export type routeParams = {
    login: undefined
    home: undefined
}

const Stack = createNativeStackNavigator<routeParams>();

export const RootNavigator = () => {
    return (

        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={BottomNavigation} 
                options={
                    { 
                        headerShown: false, 
                        headerBackVisible: false, 
                        
                        gestureEnabled: true,
                        
                    }
                } />
        </Stack.Navigator>
       
    );
};