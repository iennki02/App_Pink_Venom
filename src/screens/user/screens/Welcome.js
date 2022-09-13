import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { UserContext } from '../UserContext';   


export const Welcome = (props) => {
    const { navigation } = props;

    // const onNext = async () => {
    //   const res = await onLogin(email, password);
    //   console.log('onLoginPress: ', res);
    //   if (res == false) {
    //       ToastAndroid.show('Login failed', ToastAndroid.TOP);
    //   }
    // }

    return (
      // <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
              <View style={styles.imageContainer}>
                  <Image style={styles.image} source={require('../../../assets/images/logo.png')} />
              </View>

              <View style={styles.sloganContainer}>
                  <Text style={styles.slogan}>Order album của BLACKPINK tại đây!</Text>
              </View>
              <View style={styles.buttonContainer}>
                  <Pressable
                      onPress={() => navigation.navigate('Login')}
                      style={styles.button}>
                      <Text style={styles.next}>Tiếp theo</Text>
                  </Pressable>
              </View>
              
          </View>
      </ScrollView>
      // </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
      next: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
  },
  button: {
      width: '100%',
      height: 50,
      borderRadius: 30,
      backgroundColor: '#D77189',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonContainer: {
      paddingHorizontal: 32,
      marginTop: 10,
  },
  sloganContainer: {
      fontSize: 18,
      lineHeight: 23,
      fontWeight: 600,
      alignItems: 'center',
  },
  slogan: {
      paddingHorizontal: 15,
      marginTop: 150,
      color: '#D77189',
  },
  image: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      resizeMode: 'cover',
      alignItems: 'center',
  },
  imageContainer: {
      width: '100%',
      height: 121,
      marginTop: 280,
      marginLeft:3,
      flexDirection: 'row',
  },
  container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
  }
})
