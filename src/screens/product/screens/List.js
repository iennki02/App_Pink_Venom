import { StyleSheet, Text, View, Image, Dimensions, Pressable, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useFonts, Dosis_800ExtraBold, Dosis_500Medium, Dosis_400Regular } from '@expo-google-fonts/dosis';
import { ScrollView } from 'react-native-virtualized-view';

export const List = (props) => {
  const { navigation } = props;

  const renderItem = ({ item }) => {
    const { image, name, price } = item;

    return (
      <View style={styles.Flatlist}>
        <View style={styles.rowimg}>
          <View style={styles.imgProduct}>
            <Image style={styles.imgpro} resizeMode='cover' source={{ uri: image }} />
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
    <View style={styles.notifyContainer}>
      {/* Top */}
      <View style={styles.Top}>
        <View style={styles.HiContainer}>
          <Image style={styles.imageicon}
            source={require('../../../assets/images/icon_light_stick.png')} />
          <Pressable
            onPress={() => setTimeout(navigation.goBack, 0)}
            style={styles.Title}>
            <View style={styles.Title}>
              <Text style={styles.textTitle}>Danh mục</Text>
            </View>
          </Pressable>
        </View>
      </View>


      <View style={styles.lineStyle} />

      <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
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
    height:'100%',
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
    width: '80%',
    height: 36,
    marginLeft: 1,
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
    backgroundColor:'red',
    width: '100%',
    height: '100%',
    backgroundColor: '#F9F6F6',
  },
})

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