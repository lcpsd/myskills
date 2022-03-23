import React, {useState, useEffect} from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    FlatList,
} from 'react-native'
import { Button } from '../components/Button'
import { TaskCard } from '../components/TaskCard'

interface TaskData{
    id: string,
    name: string
}

interface KeyExtractorProps{
    item: TaskData,
    index: number
}

export default function Home(){

    const [newTask, setNewTask] = useState('')
    const [myTasks, setMyTasks] = useState<TaskData[]>([])
    const [gretting, setGretting] = useState('')

    function handleAddNewTask(){

        const data = {
            id: String(new Date().getTime()),
            name: newTask
        }

        setMyTasks(oldState  => [...oldState, data])
        setNewTask('')
    }

    function handleRemoveTask(id: string){
        setMyTasks(oldState => oldState.filter(task => task.id !== id))
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
            value={newTask}
            style={styles.input}
            placeholder="New Task"
            onChangeText={setNewTask}
            />

            <Button 
            onPress={handleAddNewTask}
            title="Add"
            />

            <Text
            style={[styles.title, {
                marginTop: 30,
            }]}
            >
                My Tasks
            </Text>

            <FlatList 
            data={myTasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TaskCard 
                task={item.name}
                onPress={() => handleRemoveTask(item.id)}
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