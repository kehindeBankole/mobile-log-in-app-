import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Form from '../components/Form'

export default function Login() {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/Group.png')} resizeMode='contain' />
            </View>
            <View style={{ flex: 3 }}>
                <Form />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        paddingTop: 40,
        paddingHorizontal: 40,
        height: Dimensions.get('window').height,
        backgroundColor: "#81248A"
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
