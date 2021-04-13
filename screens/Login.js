import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import Form from '../components/Form'

export default function Login() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.loginContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/Group.png')} resizeMode='contain' />
            </View>
            <View style={{ flex: 4 }}>
                <Form />
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        paddingTop: 40,
        paddingHorizontal: 40,
        height: Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        backgroundColor: "#81248A",
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom:20
    }
})
