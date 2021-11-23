import React from 'react'
import {TouchableOpacity, StyleSheet, Text, Platform, TouchableOpacityProps} from 'react-native'

interface skillProps extends TouchableOpacityProps {
    propSkills:string
}

export function CardSkill({propSkills, ...rest}:skillProps){
    return(
    <TouchableOpacity 
    style={[styles.buttonSkill, {marginBottom:10}]}
    {...rest} 
    >
        <Text style={styles.textSkill}>{propSkills}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonSkill:{
        backgroundColor:'#1F1E25',
        padding:20,
        borderRadius:50,

    },
    textSkill:{
        color:'#FFF',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})