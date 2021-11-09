import React, {useState} from 'react'
import {
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Platform} from 'react-native'

export function Home(){
    const [newSkill, setNewSkill] = useState()
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill(){
       setMySkills(oldState =>[...oldState, newSkill])
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Caique!</Text>
            <TextInput 
            placeholder='Your Skill' 
            placeholdeTextColor='#555' 
            style={styles.input}
            onChangeText={setNewSkill}
            />

            <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            onPress={handleAddNewSkill}
            >
                <Text style={styles.textButton}>Add Skill</Text>
            </TouchableOpacity>

            <Text style={[styles.title, {marginVertical:50}]} >My Skills</Text>

          {
              mySkills.map(functionSkills=>(
                <TouchableOpacity key={functionSkills} style={[styles.buttonSkill, {marginBottom:10}]}>
                    <Text style={styles.textSkill}>{functionSkills}</Text>
                </TouchableOpacity>
              ))
          }

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:70,
        paddingHorizontal:40,
        backgroundColor:'#121015'
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'#FFF',
    },
    input:{
        marginTop:10,
        padding: Platform === 'ios'?17:15,
        borderRadius:5,
        backgroundColor:'#1F1E25'
    },
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

    },
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