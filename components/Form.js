import React from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Form() {
    return (
        <View>
            <Text style={styles.textConatiner}>Learn Graphic and UI/UX designing in Hindi
for free with live projects.</Text>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    style={{ paddingHorizontal: 20, height: 60, backgroundColor: '#FFFFFF', fontSize: 16, borderRadius: 40 }}
                    placeholder="Email Address"

                />
                <TextInput
                    style={{ marginTop: 20, paddingHorizontal: 20, height: 60, backgroundColor: '#FFFFFF', fontSize: 16, borderRadius: 40 }}
                    placeholder="Password"

                />
                <Pressable
                    onPress={() => alert('12')}
                    style={{
                        backgroundColor: '#FD8C00',
                        height: 60,
                        width: '100%',
                        borderRadius: 40,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                    <Text style={{ textTransform: 'uppercase', color: '#FFFFFF', fontSize: 16 }}>login</Text>
                </Pressable>
                <Text style={{ textAlign: 'right', fontSize: 14, marginTop: 20, color: '#FD8C00' }}>Forgot Password?</Text>
                <View style={{ }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 20, color: '#FFFFFF' }}>or login with</Text>
                    <View style={{ justifyContent: 'center' , flexDirection:'row' , marginTop:20 }}>
                        <Image source={require('../assets/gmail.png')} style={{marginRight:15}}/>
                        <Image source={require('../assets/facebook.png')} style={{marginRight:15}}/>
                        <Image source={require('../assets/twitter.png')} />
                    </View>
                   
                    
                    <Text style={{textAlign:'center' , marginTop:20 , fontSize:12 , color:'white'}}>Don’t have an account? <Text style={{color:"#FD8C00"}}>Register now</Text></Text>
               <Text style={{textAlign:'center' , marginTop:20 , fontSize:13 , color:'white' , lineHeight:30}}>By signing up, you are agree with our <Text style={{color:"#FD8C00"}}>Terms & Conditions</Text></Text>
               
                </View>
            </View>
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
