import React from 'react'
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native'

interface ButtonProps extends TouchableOpacityProps{
    title?:string
}

export function Button({title,...rest} : ButtonProps){
    return(
    <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.8}
    {...rest}    
    >

        <Text style={styles.textButton}>{title}</Text>

    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        padding:17,
        backgroundColor:'#A370F7',
        borderRadius:5,
        alignItems:'center',
        marginTop:10
    },
    textButton:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold',

    }
})