import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CustumButton from '../components/CustumButton';
import { routeParams } from '../navigation/RootNavigator';


export default function Login() {
    const [text, onChangeText] = useState("Useless Text");

    const navigation = useNavigation<NativeStackNavigationProp<routeParams>>();
    function login(){
      navigation.navigate('home');
      
    }
    return(
        <View style={styles.container}>
            <Image 
                resizeMode='center'
                source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Timetracker app</Text>
            <TextInput
                placeholder='Username'
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                style={styles.input}
                
            />
            <CustumButton onPress={login} title='Se connecter'/>
        </View>
    )
    
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 16
    },
    input: {
      height: 55,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      padding: 10,
      fontSize: 16,
      borderColor: '#aeaeae'
    },
    logo: {
      width: 150,
      height: 150,
      alignSelf: "center",
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      alignSelf: "center",
      marginBottom: 25,
  
    }
  });
  