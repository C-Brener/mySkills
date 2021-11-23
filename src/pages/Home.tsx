import React, {useEffect, useState} from 'react'
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

 {/* My Interfaces */}

 interface SkillData{
     id:string;
     name:string;
 }

export function Home(){
    {/* States */}
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [grettings, setGrettings] = useState('')

    function handleAddNewSkill(){
        const data={
            id:String(new Date().getTime()),
            name: newSkill,
        }
       setMySkills(oldState =>[...oldState, data])
    }
    useEffect(()=>{
        const currentHours = new Date().getHours()
        let morning = currentHours < 12
        let afternoon = currentHours >=12 && currentHours < 18
        let night = currentHours >= 19 && currentHours < 23
        console.log(currentHours)
        if(morning){
            setGrettings('Bom dia')
        }else if(afternoon){
            setGrettings('Boa Tarde')
        }else if(night){
            setGrettings('Boa Noite')
        }
    },[])
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Caique!</Text>
            <Text>{grettings}</Text>
            <TextInput 
            placeholder='Your Skill' 
            placeholderTextColor='#555' 
            style={styles.input}
            onChangeText={setNewSkill}
            />

            <Button 
                onPress={handleAddNewSkill}
                title='Add Skill'
            />

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
                renderItem = renderiza os itens de acordo com as keys que ele achar 
                Vale salientar que se trata de um desestruturalização do vetor item
            */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={mySkills}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                    <CardSkill propSkills={item.name}/>
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
        padding: Platform === "ios" ? 17 : 15,
        borderRadius:5,
        backgroundColor:'#1F1E25'
    },
})