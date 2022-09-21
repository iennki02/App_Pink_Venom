import { StyleSheet, Text, View, Image, Dimensions, Pressable, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useFonts, Dosis_800ExtraBold, Dosis_500Medium, Dosis_400Regular } from '@expo-google-fonts/dosis';
import { ScrollView } from 'react-native-virtualized-view';

export const Notify = (props) => {
    const { navigation } = props;

    let [fontsLoaded] = useFonts({
        Dosis_800ExtraBold, Dosis_500Medium, Dosis_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={styles.notifyContainer}>
              {/* Top */}
      <View style={styles.Top}>
        <View style={styles.HiContainer}>
          <Pressable
            onPress={() => setTimeout(navigation.goBack, 0)}
            style={styles.imageicon}>
            <Image style={styles.imageicon}
              source={require('../../../assets/images/back.png')} />
          </Pressable>
          <View style={styles.Title}>
            <Text style={styles.textTitle}>Thông báo</Text>
          </View>

        </View>
      </View>

            <View style={styles.lineStyle} />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                {/* list */}
                <View style={styles.flatListContainer}>
                    <View style={styles.Hi}>
                        <Text style={styles.TextHi}>Chào bạn mới! </Text>
                    </View>
                    <View style={styles.nd}>
                        <Text style={styles.Textnd}>Pink Venom Shop có tất cả album của BLACKPINK, bạn hãy tận hưởng nhé! </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Textnd: {
        fontFamily: 'Dosis_500Medium',
        fontSize: 16,
    },
    nd: {
        marginHorizontal: 15,
    },

    TextHi: {
        fontFamily: 'Dosis_800ExtraBold',
        fontSize: 18,
    },

    Hi: {
        marginHorizontal: 15,
        marginBottom: 5,
    },

    flatListContainer: {
        justifyContent: 'center',
        marginHorizontal: 5,
        backgroundColor: 'white',
        marginVertical: 22,
        marginHorizontal: 16,
        borderRadius: 20,
        height: 112,
    },

    lineStyle: {
        borderWidth: 0.3,
        borderColor: 'black',
    },

    textTitle: {
        fontFamily: 'Dosis_800ExtraBold',
        fontSize: 20,
    },

    Title: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 36,
    },

    imageicon: {
        width: 25,
        height: 25,
        marginRight: 3,
    },

    HiContainer: {
        width: '90%',
        height: 36,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
    },

    Top: {
        flexDirection: 'row',
        width: '100%',
        height: 36,
        marginTop: 30,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    notifyContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F6F6',
    }
})