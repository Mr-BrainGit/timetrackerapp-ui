import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { IconButton, Portal } from 'react-native-paper';
import { PRIMARY_COLOR } from '../../utils/constants';

function AddTask({show, onDismiss, children}){

    const bottomSheetHeigth = Dimensions.get("window").height * 0.63;
    const deviceWidth = Dimensions.get("window").width;
    const bottom = useRef(new Animated.Value(-bottomSheetHeigth)).current;
    const [open, setOpen] = useState(show)

    useEffect(() => {
        if (show) {
            setOpen(show);
            Animated.timing(bottom, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start()
        }else{
            Animated.timing(bottom, {
                toValue: -bottomSheetHeigth,
                duration: 300,
                useNativeDriver: false
            }).start(() => {
                setOpen(false)
            })
        }
    },[show])
    return(
        <Portal>
           <Animated.View style={[styles.root, {height: bottomSheetHeigth, bottom: bottom}]}>
                <View style = {[
                    styles.header, 
                    styles.common,
                    {
                        shadowOffset: {
                            height: 5,
                            width: 0
                        },
                    },
                ]}>

                </View>
                <View style = {
                    {
                        width: 150,
                        height: 3,
                        borderRadius: 1.5,
                        position: "absolute",
                        top: 8,
                        left: (deviceWidth - 70) / 2,
                        zIndex: 10,

                    }
                }>
                    <Text style={styles.title}>Nouvelle tâche</Text>
                    <IconButton color= 'white' icon={'close'} style={styles.closeIcon}
                        onPress = {onDismiss}
                    />

                </View>
                {children}
           </Animated.View>
        </Portal>
    );


}

export default AddTask;

const styles = StyleSheet.create({
    
    root: {
        position : "absolute",
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        

    },
    header: {
        height: 55,
        backgroundColor: PRIMARY_COLOR
    },
    common: {
        shadowColor : "#000",
        shadowOffset: {
            height: -3,
            width: 0
        },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 3
    },
    closeIcon:{
        position : "absolute",
        top: -5,
        left: 180,
        zIndex: 10,
    },
    
    title :{
        position : "absolute",
        top : 10,
        left : -150,
        fontWeight: "bold",
        color: "white"
    }
});