import React, {useState} from 'react'
import {
    Text, 
    View, 
    TextInput, 
    StyleSheet,
    FlatList,
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
        <View style={styles.container}>
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
                /*
                <ScrollView> 
                  {
                      mySkills.map(Skills=>(
                          <CardSkill key={Skills} propSkills={Skills}/>
                      ))
                  }            
                </ScrollView> 
                */
            }
            {/* A Flatlist lida melhor com lista grandes
                Só renderizará o que for necessário mostrar naquele momento
                Melhora a performance do APP
                Não utiliza o prototype map
                data = coleção de dados a ser renderizada
                keyExtrator = extração da key de cada item indicando que aquela key é unica baseada em seu nome
                cada item será sua própria key baseada na listagem 
                renderItem =
            */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={mySkills}
                keyExtractor = {item => item}
                renderItem={({item}) => (
                    <CardSkill propSkills={item}/>
                )}
            />

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
})