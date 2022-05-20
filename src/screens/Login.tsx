import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CustumButton from '../components/CustumButton';
import { routeParams } from '../navigation/RootNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR, SECONDAY_COLOR } from '../utils/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {Controller} from 'react-hook-form';
import CustomTextInput from '../components/CustomITextInput';


type formValues = {
  email: string,
  password: string
}
export default function Login() {
    const [text, onChangeText] = useState("Useless Text");

    
    const validationSchema = Yup.object({
      email: Yup.string().email('Saisissez une adresse email valide !').required("L'adresse email est requis !"),
      password: Yup.string().required("Le mot de passe est requis !")

    }).required();

    const {control, handleSubmit, formState:{errors}} = useForm<formValues>({
      resolver: yupResolver(validationSchema)
    })
    const navigation = useNavigation<NativeStackNavigationProp<routeParams>>();

    function login(){
      navigation.navigate('home');
      
    }
    return(
        <ScrollView>
              <View style={styles.container}>
                <Image 
                    resizeMode='center'
                    source={require('../../assets/logo.png')} style={styles.logo} />
                <Text style={styles.title}>Timetracker app</Text>
            
                <Controller control={control} name="email" render={({field: {onChange, value}, fieldState: {error}}) => (
                        <CustomTextInput
                          placeholder="Username"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          errorDescription={error?.message}
                          iconName="mail-outline"
                          
                        />
                    )} />
                <Controller control={control} name="password" render={({field: {onChange, value}, fieldState: {error}}) => (
                        <CustomTextInput
                          placeholder="Mot de passe"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          errorDescription={error?.message}
                          iconName="key-outline"
                          
                        />
                    )} />
                <CustumButton onPress={handleSubmit(login)} title='Se connecter'/>
              </View>
        </ScrollView>
        
        
    )
    
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 16,
      marginTop: '30%'
    },
    input: {
      width: '80%',
      height: 40,
      marginVertical: 10,
      fontSize: 15,
      color: '#000',
      borderColor: '#8c8c8c'
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
  
    },
    textInputContainer: {
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#999999',
      borderRadius: 5,
      marginBottom: 20
    }

  });
  