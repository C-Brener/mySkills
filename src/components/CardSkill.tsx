import React from 'react'
import {TouchableOpacity, StyleSheet, Text, Platform} from 'react-native'


export function CardSkill({propSkills}){
    return(
    <TouchableOpacity style={[styles.buttonSkill, {marginBottom:10}]}>
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