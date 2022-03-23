import React from 'react'
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    skill: string
}

export function SkillCard({skill, ...rest}){

    return(
        <Text
            style={styles.skill}
            {...rest}
            >
                {skill}
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