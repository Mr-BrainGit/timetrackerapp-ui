import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CustumButton from '../components/CustumButton';

export default function Settings(){

    return(
        <View style={styles.container}>
           <Text style={styles.title}>Paramètres</Text>
        </View>
    );


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