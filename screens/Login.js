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
        paddingVertical: 40,
        paddingHorizontal: 40,
        height: Dimensions.get('screen').height,
        width:Dimensions.get('window').width,
        backgroundColor: "#81248A",
        flex:1
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom:20
    }
})
