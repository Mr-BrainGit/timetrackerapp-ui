import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CustumButton from '../components/CustumButton';
import { Avatar, Divider, ListItem } from 'react-native-elements';
import { PRIMARY_COLOR } from '../utils/constants';


export default function Settings(){

    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Avatar
                  size="large"
                  title="EK"
                  titleStyle= {{color: 'white'}}
                  rounded
                  containerStyle={{backgroundColor: PRIMARY_COLOR}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
                <View>
                    <Text style={styles.avatarTitle}>Ezéchias Kouda</Text>
                    <Text style={styles.avatarSubTitle}>ezechias.kouda@nafann.com</Text>
                    <View
                      style={{
                        marginTop: -12,
                        width: '125%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#ccc',
                      }}
                    />
                </View>
                

            </View>

            

        </View>
    );


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
    },
    head:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
    },

    avatarTitle: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 25,
      marginLeft: 7,
      marginTop: 12
    },
    avatarSubTitle: {
      fontSize: 17,
      marginBottom: 25,
      marginTop: -27,
      marginLeft: 7,
      opacity: 0.7
  
    }
});