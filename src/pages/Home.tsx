import React, {useState, useEffect} from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    FlatList,
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData{
    id: string,
    name: string
}

interface KeyExtractorProps{
    item: SkillData,
    index: number
}

export default function Home(){

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [gretting, setGretting] = useState('')

    function handleAddNewSkill(){

        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState  => [...oldState, data])
        setNewSkill('')
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(skill => skill.id !== id))
    }

    useEffect(() => {

        const currentHour = new Date().getHours()

        currentHour < 12 && setGretting('Good Morning')
        
        currentHour >= 12 && setGretting('Good Afternoon')

        currentHour >= 18 && setGretting('Good Night')

    }, [])

    return(
        <View style={styles.container}>

            <Text style={styles.title} >Wellcome, Lucas</Text>

            <Text style={styles.gretting}>
                {gretting}
            </Text>

            <TextInput 
            style={styles.input}
            placeholder="New Skill"
            onChangeText={setNewSkill}
            />

            <Button 
            onPress={handleAddNewSkill}
            title="Add"
            />

            <Text
            style={[styles.title, {
                marginTop: 30,
            }]}
            >
                My Skills
            </Text>

            <FlatList 
            data={mySkills}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <SkillCard 
                skill={item.name}
                onPress={() => handleRemoveSkill(item.id)}
                />
            )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
        flexDirection: 'column'
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input:{
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 5,
    },
    button:{
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    gretting:{
        color: '#FFF',
    }
})