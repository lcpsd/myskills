import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export function SkillCard({text}){

    return(
        <Text
            style={styles.skill}
            >
                {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    skill: {
        color: '#fff',
        backgroundColor: '#1F1E25',
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 7,
        marginVertical: 5,
    }
})