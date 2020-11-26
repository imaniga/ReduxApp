import React from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import styles from './styles'


const SecondaryBookComponent =({book,onRemove})=>{
    console.log("din comp", book)
    return (
        <View style={styles.container}>
            <View style = {styles.textContainer}>
                <Text style={styles.text}>
                {book.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onRemove} style={styles.button}>
                    <Text style={styles.buttonText}>x</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default SecondaryBookComponent