import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { UserContext } from '../UserContext';
import { useFonts, Dosis_800ExtraBold, Dosis_500Medium, } from '@expo-google-fonts/dosis';


export const Register = (props) => {
    const { navigation } = props;

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const onLoginPress = async () => {
    //   const res = await onLogin(email, password);
    //   console.log('onLoginPress: ', res);
    //   if (res == false) {
    //       ToastAndroid.show('Login failed', ToastAndroid.TOP);
    //   }
    // }

    let [fontsLoaded] = useFonts({
        Dosis_800ExtraBold, Dosis_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        // <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../assets/images/logo.png')} />
                </View>

                <View style={styles.sloganContainer}>
                    <Text style={styles.slogan}>Đăng ký tài khoản của bạn</Text>
                </View>
                <View style={styles.formContainer}>
                     {/* email */}
                    <View style={styles.row}> 
                        <Text style={styles.textEmail}>Email</Text>
                        <Text style={styles.textimpo}>*</Text>
                    </View>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                        style={styles.textInput} />

                        

                    {/* pass */}
                    <View style={styles.row}> 
                        <Text style={styles.textEmail}>Mật khẩu</Text>
                        <Text style={styles.textimpo}>*</Text>
                    </View>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Mật khẩu'
                        style={styles.textInput} />


                    {/* loginButton */}
                    <Pressable
                        // onPress={onLoginPress}
                        style={styles.button}>
                        <Text style={styles.login}>Đăng ký</Text>
                    </Pressable>
                </View>

            


                <View style={styles.registerContainer}>
                    <Text style={styles.text2}> Bạn chưa tài khoản?</Text>
                    <Text onPress={() => navigation.navigate('Login')} style={styles.register}>Đăng nhập</Text>
                </View>
            </View>
        </ScrollView>
        // </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    text2: {
        fontFamily: 'Dosis_500Medium',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
    },

    register: {
        fontFamily: 'Dosis_800ExtraBold',
        fontWeight: '500',
        fontSize: 16,
        marginLeft:5,
        lineHeight: 20,
        color: '#D77189',
    },
    registerContainer: {
        marginTop: 11,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    imagefbgg: {
        width:24,
        height:24,
    },

    textfbgg: {
        marginLeft: 5,
        fontFamily: 'Dosis_800ExtraBold',
        fontSize: 15,
    },

    gg: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 115,
        height: 45,
        backgroundColor: '#E2E2E2',
        borderRadius: 10,
    },

    space: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
    },

    fb: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 115,
        height: 45,
        backgroundColor: '#E2E2E2',
        borderRadius: 10,
    },

    fb_gg: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17,
        width: 286,
        height: 45,
    },

    textLoginWith: {
        fontFamily: 'Dosis_500Medium',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
    },
    LoginWithContainer: {
        marginBottom: 88,
        alignItems: 'center',
    },


    textForgetPass: {
        fontFamily: 'Dosis_800ExtraBold',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
    },
    ForgetPassContainer: {
        marginTop: 17,
        marginBottom: 23,
        alignItems: 'center',
    },

    login: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Dosis_800ExtraBold',
        lineHeight: 22,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: "#D77189",
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },


    savepass:{
        fontFamily: 'Dosis_500Medium',
        fontSize: 18,
        marginLeft: 14,
    },

    SavePassView: {
        borderRadius:5,
        marginTop:10,
    },

    CheckBox:{
        borderRadius:5,
        marginLeft: 20,
        marginTop:10,
        width: 25,
        height: 25,
    },

    textInput: {
        height: 45,
        marginVertical: 8,
        borderRadius: 30,
        borderWidth: 0.5,
        paddingLeft: 20,
        fontSize: 15,
    },
    formContainer: {
        paddingHorizontal: 32,
        marginTop: 10,
        
    },

    textimpo: {
        fontFamily: 'Dosis_500Medium',
        fontSize: 18,
        lineHeight: 23,
        marginRight: 5,
        color: 'red',
        marginBottom: 8,
    },
    textEmail: {
        fontFamily: 'Dosis_500Medium',
        fontSize: 18,
        lineHeight: 23,
        marginRight: 5,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
    },

    sloganContainer: {
        lineHeight: 24,
        alignItems: 'center',
    },
    slogan: {
        fontSize: 20,
        paddingHorizontal: 26,
        marginTop: 32,
        marginBottom: 15,
        fontFamily: 'Dosis_800ExtraBold',
    },
    image: {
        width: 220,
        height: '100%',
        resizeMode: 'cover',
    },
    imageContainer: {
        width: '100%',
        height: 90,
        marginTop: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',

    }
})
