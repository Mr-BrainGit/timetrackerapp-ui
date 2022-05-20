import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { inputErrorColor, PRIMARY_COLOR, SECONDAY_COLOR } from '../utils/constants';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    placeholder: string;
    iconName: string;
    value: string;
    onChange: (text: string) => void;
    error?: boolean;
    errorDescription?: string;
}

const CustomTextInput = (props: Props) => {
  return (
    <View>
            <View style={[styles.textInputContainer, props.error ? {borderColor: inputErrorColor, borderWidth: 1.5}: null]}>
                <Ionicons name={props.iconName} size={25} style={[{
                    marginLeft: -20,
                    marginRight: 10,
                }, props.error ?  {color: inputErrorColor}: null]} />
                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    placeholderTextColor="#828282"
                    underlineColorAndroid="transparent"
                    onChangeText={props.onChange}
                    value={props.value}
                />  
            </View>    
            <View style={{marginTop: -19, marginBottom: 10}}>
                <Text style={[props.error ? {color: inputErrorColor}: null]}>{props.errorDescription}</Text>
            </View>    
    </View>
    
        
  )
}

export default CustomTextInput;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 10,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 5,
        paddingVertical: 18,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      textInputContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#999999',
        borderRadius: 5,
        marginBottom: 20
      },
      input: {
        width: '80%',
        height: 40,
        marginVertical: 10,
        fontSize: 15,
        color: '#000',
        borderColor: '#8c8c8c'
      },
})
