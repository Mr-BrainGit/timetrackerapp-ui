import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CustumButton from '../components/CustumButton';
import { FloatingAction } from "react-native-floating-action";
import { Provider } from 'react-native-paper';
import AddTask from './bottom-sheet/AddTask';
import { ScrollView } from 'react-native-gesture-handler';
import { PRIMARY_COLOR } from '../utils/constants';


export default function NotStartTask(){
    const [show, setShow] = useState(false);
    const actions = [
        {
          text: "Ajouter une tâche",
          icon: require("../../assets/task-icon.png"),
          name: "ADD_TASK",
          position: 1
        },
        
      ];
    return(
        <Provider>
            <View style={styles.container}>
                <Text style={styles.title}>Pas débutée</Text>
                <FloatingAction
                        overlayColor='rgba(68, 68, 68, 0.1)'
                        color='#e44232'
                        actions={actions}
                        onPressItem={name => {
                            setShow(true)
                        console.log(`selected button: ${name}`);
                        }}
                    />
                <AddTask
                    show = {show}
                    onDismiss = { () => {
                        setShow(false);
                    }}
                    
                    >
                <ScrollView contentContainerStyle= {{padding: 16}}>
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                </ScrollView>
                </AddTask>
            </View>
            
        </Provider>
        
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