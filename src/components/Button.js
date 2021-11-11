import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export function Button(){
    return(
    <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.7}
    onPress={handleAddNewSkill}
    >

        <Text style={styles.textButton}>Add Skill</Text>

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