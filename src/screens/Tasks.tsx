import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PRIMARY_COLOR } from '../utils/constants';
import NotStartTask from './NotStartTask';
import StartedTask from './StartedTask';
import EndedTask from './EndedTask';


export default function Tasks(){

  const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator
          initialRouteName='En cours'
            screenOptions={{
              tabBarActiveTintColor: PRIMARY_COLOR,
              tabBarIndicatorStyle: {backgroundColor: PRIMARY_COLOR, height: 3},
              tabBarLabelStyle: { fontSize: 12 },
            }}
        >
            <Tab.Screen name="Pas débutée" component={NotStartTask} />
            <Tab.Screen name="En cours" component={StartedTask} />
            <Tab.Screen name="Terminée" component={EndedTask} />
        </Tab.Navigator>
        
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
      borderColor: PRIMARY_COLOR
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