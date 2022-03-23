import React from 'react'
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    task: string
}

export function TaskCard({task, ...rest}){

    return(
        <Text
            style={styles.task}
            {...rest}
            >
                {task}
        </Text>
    )
}

const styles = StyleSheet.create({
    task: {
        color: '#fff',
        backgroundColor: '#1F1E25',
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 7,
        marginVertical: 5,
    }
})