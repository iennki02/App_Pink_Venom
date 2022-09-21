import { StyleSheet, Text, View, Image, Dimensions, Pressable, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useFonts, Dosis_800ExtraBold, Dosis_500Medium, Dosis_400Regular } from '@expo-google-fonts/dosis';
import { ScrollView } from 'react-native-virtualized-view';

import { List } from './List';

export const Home = (props) => {
    const { navigation } = props;


    // const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // const { onGetProductForHomePage } = useContext(ProductContext);

    const renderItem = ({ item }) => {
        const { image, name, price } = item;

        return (
            <View style={styles.Flatlist}>
                <View style={styles.rowimg}>
                    <View style={styles.imgProduct}>
                        <Image style={styles.imgpro} resizeMode='cover'
                            source={{ uri: image }} />
                    </View>
                    <View style={styles.columnNamePrice}>
                        <View style={styles.Name}>
                            <Text numberOfLines={2} style={styles.textName} >{name}</Text>
                        </View>
                        <View style={styles.Price}>
                            <Text style={styles.textPrice}>{price}đ</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    let [fontsLoaded] = useFonts({
        Dosis_800ExtraBold, Dosis_500Medium, Dosis_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={styles.container}>

            <View style={styles.Top}>
                <View style={styles.HiContainer}>
                    <Image style={styles.imageicon}
                        source={require('../../../assets/images/icon_light_stick.png')} />
                    <View>
                        <Text style={styles.textHi}>Chào Jen!</Text>
                    </View>
                </View>

                {/* Thông báo */}
                <View style={styles.noti}>
                    <Pressable
                        onPress={() => navigation.navigate('Notify')}
                        style={styles.imagebell}>
                        <Image style={styles.imagebell}
                            source={require('../../../assets/images/bell.png')} />
                    </Pressable>

                </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>


                <View style={styles.imageContainer}>
                    <Image style={styles.imagebanner}
                        source={require('../../../assets/images/banner/banner1.png')} />
                </View>


                <View style={styles.suggestionsContainer}>
                    <Text style={styles.suggestions}>Gợi ý cho bạn</Text>
                </View>

                {/* list */}
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={data} renderItem={renderItem} //hiển thị 1 item
                        keyExtractor={item => Math.random()}>
                    </FlatList>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textName: {
        fontFamily: 'Dosis_800ExtraBold',
        fontSize: 18,
    },
    columnNamePrice: {
        width: '70%',
        flexDirection: 'column',
    },
    rowimg: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imgProduct: {
        marginRight: 10,
    },
    imgpro: {
        width: 82,
        height: 82,
        borderRadius: 20,
    },
    flatListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 5,
    },

    Flatlist: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: 112,
    },

    suggestions: {
        fontFamily: 'Dosis_800ExtraBold',
        fontSize: 18,
        marginLeft: 20,
    },
    suggestionsContainer: {},

    textHi: {
        fontFamily: 'Dosis_500Medium',
        fontSize: 18,
    },
    imageicon: {
        width: 25,
        height: 25,
        marginLeft: 9,
        marginRight: 3,
    },
    HiContainer: {
        width: 145,
        height: 36,
        marginLeft: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
    },
    imagebanner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },
    imageContainer: {
        width: '90%',
        height: 162,
        marginTop: 23,
        marginBottom: 27,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    imagebell: {
        width: 20,
        height: 20,
    },

    noti: {
        backgroundColor: 'white',
        width: 35,
        height: 35,
        marginRight: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
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

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#DF6F8A',
    }
})

// data cứng 

var data = [
    {
        "_id": "001",
        "image": "https://cdn.imweb.me/thumbnail/20220811/697a407a7e223.png",
        "name": "2nd album [BORN-PINK] Box Set Ver.",
        "price": "400.000"
    },
    {
        "_id": "002",
        "image": "http://cdn.shopify.com/s/files/1/0469/3927/5428/products/blackpink-born-pink-digipack-ver-nolae-329405_1200x1200.jpg?v=1661159529",
        "name": "2nd album [BORN-PINK] digipack ver.",
        "price": "250.000"
    },
    {
        "_id": "003",
        "image": "https://cdn.shopify.com/s/files/1/0260/2667/2233/products/SmartSelect_20220811-145246_Instagram_530x@2x.jpg?v=1660193580",
        "name": " 2nd album [BORN-PINK] limited ver.",
        "price": "1.200.000"
    },
    {
        "_id": "004",
        "image": "https://cf.shopee.vn/file/f69beeb35861a4ca11530fd12df0483e",
        "name": "BLACKPINK 1st Full Album [THE ALBUM].",
        "price": "450.000"
    },
    {
        "_id": "004",
        "image": "https://cf.shopee.vn/file/f69beeb35861a4ca11530fd12df0483e",
        "name": "BLACKPINK 1st Full Album [THE ALBUM].",
        "price": "450.000"
    },
    {
        "_id": "004",
        "image": "https://cf.shopee.vn/file/f69beeb35861a4ca11530fd12df0483e",
        "name": "BLACKPINK 1st Full Album [THE ALBUM].",
        "price": "450.000"
    },
    {
        "_id": "004",
        "image": "https://cf.shopee.vn/file/f69beeb35861a4ca11530fd12df0483e",
        "name": "BLACKPINK 1st Full Album [THE ALBUM].",
        "price": "450.000"
    },
]