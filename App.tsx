import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomNavigation } from './src/navigation/BottomNavigation';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
 
  return (
      <SafeAreaProvider>
          <NavigationContainer>
            <BottomNavigation/>
          </NavigationContainer>
      </SafeAreaProvider>

          
    
  );
}

const styles = StyleSheet.create({
  
});
