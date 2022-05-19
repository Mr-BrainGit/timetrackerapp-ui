import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    onPress: any;
}

const CustumButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{props.title}</Text>
  </TouchableOpacity>
  )
}

export default CustumButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 10,
        backgroundColor: "#1d50da",
        borderRadius: 5,
        paddingVertical: 18,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})
