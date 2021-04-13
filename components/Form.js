import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Form() {
    return (
        <View>
            <Text style={styles.textConatiner}>Learn Graphic and UI/UX designing in Hindi
for free with live projects.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textConatiner: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    }
})
