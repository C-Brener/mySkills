import React, {useState} from 'react'
import {
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    ScrollView,
    Platform} from 'react-native'

    {/* My Components */}
import { Button } from '../components/Button'
import { CardSkill } from '../components/CardSkill'

export function Home(){
    const [newSkill, setNewSkill] = useState()
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill(){
       setMySkills(oldState =>[...oldState, newSkill])
    }
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome, Caique!</Text>
            <TextInput 
            placeholder='Your Skill' 
            placeholdeTextColor='#555' 
            style={styles.input}
            onChangeText={setNewSkill}
            />

            <Button propOnpress={handleAddNewSkill}/>

            <Text style={[styles.title, {marginVertical:50}]} >My Skills</Text>

          {
              mySkills.map(Skills=>(
                  <CardSkill propSkills={Skills}/>
              ))
          }

        </ScrollView>
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
})