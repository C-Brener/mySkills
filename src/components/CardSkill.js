import React from 'react'
import {TouchableOpacity, StyleSheet, Text, Platform} from 'react-native'


export function CardSkill(){
    return(
    <TouchableOpacity key={functionSkills} style={[styles.buttonSkill, {marginBottom:10}]}>
        <Text style={styles.textSkill}>{functionSkills}</Text>
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
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    }
})