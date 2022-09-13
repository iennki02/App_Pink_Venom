import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, Pressable, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useFonts, Dosis_800ExtraBold, Dosis_500Medium, Dosis_400Regular } from '@expo-google-fonts/dosis';
import { ScrollView } from 'react-native-virtualized-view';

import { List } from './List';

export const Home = (props) => {
    const { navigation } = props;
    const [search, setSearch] = useState('');
    // SlideShow
    // const [imgActive, setImgActive] = useState(0);
    // const imageSlider = [
    //     'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg',
    //     'https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg',
    //     'https://www.tugo.com.vn/wp-content/uploads/1-3339-1415416821.jpg'
    // ];
    

    // const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // const { onGetProductForHomePage } = useContext(ProductContext);

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
                            <Text style={styles.textPrice}>{price} VND</Text>
                        </View>
                    </View>
                </View>
            </View>


        );


        // return (
        //     <View style={styles.categoryContainer}>
        //         <Text style={styles.categoryName}>{name}</Text>
        //         {/* List các sản phẩm */}
        //         <View style={styles.productsContainer}>
        //             {
        //                 products.map(pro => {
        //                     return (
        //                         // 1 sản phẩm
        //                         <Pressable onPress={() => navigation.navigate('Detail', { id: pro._id })} style={styles.product} key={pro._id}>
        //                             <View style={styles.productImageContainer}>
        //                                 <Image style={styles.productImage} resizeMode='cover'
        //                                     source={{ uri: pro.images[0] }} />
        //                             </View>
        //                             <View style={styles.productNameContainer}>
        //                                 <Text numberOfLines={1} style={styles.productName}>{pro.name}</Text>
        //                             </View>
        //                             <View style={styles.productPriceContainer}>
        //                                 <Text style={styles.productPrice}>{pro.price}đ</Text>
        //                             </View>
        //                         </Pressable>
        //                     )
        //                 })
        //             }
        //         </View>
        //     </View>
        // )
    }

    // const renderHeader = () => {
    //     return (
    //         <View>
    //             <Image source={require('../../../assets/images/banner1.png')} />
    //         </View>
    //     )
    // }

    let [fontsLoaded] = useFonts({
        Dosis_800ExtraBold, Dosis_500Medium, Dosis_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    // const onChange = (naActiveEvent) => {
    //     if (naActiveEvent) {
    //         const slide = Math.ceil(naActiveEvent.contentOffset.x / naActiveEvent.layoutMeasurements.width);
    //         if (slide != imgActive) {
    //             console.log(imgActive + ">>>>>>>>>>>>>>>>>"+slide);
    //             setImgActive(slide);
    //         }
    //     }
    // };

    return (
        <View style={styles.container}>

             <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.Top}>
                    <View style={styles.HiContainer}>
                        <Image style={styles.imageicon}
                            source={require('../../../assets/images/icon_light_stick.png')} />
                        <View>
                            <Text style={styles.textHi}>Chào Jen!</Text>
                        </View>
                    </View>

                    <View style={styles.noti}>
                        <Pressable
                            onPress={() => navigation.navigate('')}
                            style={styles.imagebell}>
                            <Image style={styles.imagebell}
                                source={require('../../../assets/images/bell.png')} />
                        </Pressable>

                    </View>
                </View>

                {/* search */}
                <View style={styles.searchContainer}>
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder='Tìm kiếm'
                        style={styles.textSearch}>
                    </TextInput>

                    <Pressable
                        onPress={() => navigation.navigate('')}
                        style={styles.imagesearch}>
                        <Image style={styles.imagesearch}
                            source={require('../../../assets/images/search.png')} />
                    </Pressable>
                </View>

                 <View style={styles.imageContainer}>
                    <Image style={styles.imagebanner}
                        source={require('../../../assets/images/banner1.png')} />
                </View>
                    {/* <ScrollView
                        onScroll={({ naActiveEvent }) => onChange(naActiveEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        contentContainerStyle={styles.imageContainer}>
                        {
                            imageSlider.map((image, index) => (
                                <Image key={index}
                                resizeMode='stretch'
                                style={styles.imageContainer}
                                    source={{uri: image}} />
                            ))
                        }
                    </ScrollView> */}
                    {/* <View style={styles.Wrapdot}>
                        {
                            imageSlider.map((image, index) =>
                                <Text key={image} 
                                style={imgActive == index ? styles.dotActive : styles.dot}>
                                    &#x25cf;
                                </Text>
                            )
                        }
                    </View> */}
                {/* </View> */} 

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
        width: 100,
        height: 75,
        borderRadius: 20,
    },
    flatListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 20,
        marginVertical: 8,
        marginHorizontal: 16,

    },

    Flatlist: {
        backgroundColor: '#D77189',
        paddingHorizontal: 10,
        marginVertical: 15,
        marginHorizontal: 5,
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

    imagesearch: {
        width: 20,
        height: 20,
        marginRight: 20,
    },
    textSearch: {
        fontFamily: 'Dosis_400Regular',
        fontSize: 18,
        marginLeft: 20,
        height: 45,
        width: 280,
    },
    searchContainer: {
        width: '90%',
        height: 44,
        marginLeft: 20,
        marginTop: 23,
        flexDirection: 'row',
        backgroundColor: '#D77189',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
    },

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
        backgroundColor: '#D77189',
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

    Wrapdot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: 'black',
    },
    dot: {
        margin: 3,
        color: 'white',
    },

    imagebell: {
        width: 20,
        height: 20,
    },

    noti: {
        backgroundColor: '#D77189',
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
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0',
    }
})

// data cứng 

var data = [
    {
        "_id": "001",
        "image": "https://cafe24img.poxo.com/ygnext/web/product/big/202208/55ca65ea57c6b712ad221f7c493d42af.jpg",
        "name": "BLACKPINK 2nd album [BORN-PINK] box set ver.",
        "price": "400.000"
    },
    {
        "_id": "002",
        "image": "https://cafe24img.poxo.com/ygnext/web/product/big/202208/387b623283d7f5eea80e8e2988d1f325.jpg",
        "name": "BLACKPINK 2nd album [BORN-PINK] digipack ver.",
        "price": "55.000"
    },
    {
        "_id": "003",
        "image": "https://cafe24img.poxo.com/ygnext/web/product/tiny/202208/06a9c718d37868aedbdc741fab0d6dc8.jpg",
        "name": "BLACKPINK 2nd album [BORN-PINK] limited ver.",
        "price": "55.000"
    },
    {
        "_id": "004",
        "image": "https://i.pinimg.com/564x/22/89/88/228988a36bd49678eeffe6ee8d37130d.jpg",
        "name": "Trà Đào Cam Sả",
        "price": "55.000"
    },
    {
        "_id": "005",
        "image": "https://i.pinimg.com/564x/22/89/88/228988a36bd49678eeffe6ee8d37130d.jpg",
        "name": "Trà Đào Cam Sả",
        "price": "55.000"
    },
    {
        "_id": "006",
        "image": "https://i.pinimg.com/564x/22/89/88/228988a36bd49678eeffe6ee8d37130d.jpg",
        "name": "Trà Đào Cam Sả",
        "price": "55.000"
    },
    {
        "_id": "007",
        "image": "https://i.pinimg.com/564x/22/89/88/228988a36bd49678eeffe6ee8d37130d.jpg",
        "name": "Trà Đào Cam Sả",
        "price": "55.000"
    },
    {
        "_id": "008",
        "image": "https://i.pinimg.com/564x/22/89/88/228988a36bd49678eeffe6ee8d37130d.jpg",
        "name": "Trà Đào Cam Sả",
        "price": "55.000"
    },
    {
        "_id": "009",
        "image": "https://i.pinimg.com/564x/22/89/88/228988a36bd49678eeffe6ee8d37130d.jpg",
        "name": "Trà Đào Cam Sả",
        "price": "55.000"
    },
    {
        "_id": "010",
        "image": "https://i.pinimg.com/564x/22/89/88/228988a36bd49678eeffe6ee8d37130d.jpg",
        "name": "Trà Đào Cam Sả",
        "price": "55.000"
    },
]