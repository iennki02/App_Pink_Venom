import { StyleSheet, Text, View, Image, Pressable, ToastAndroid } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
// import PagerView from 'react-native-pager-view';
import { ProductContext } from '../ProductContext'

 const PartialView = (props) => {

    const { product } = props;

    const { price, size, madein, quantity, _id } = product;

    const { getCart, updateCart } = useContext(ProductContext);

    const getQuantity = () => {
        if (getCart().length == 0) {
            return 0;
        }
        let item = getCart().filter(i => i.product._id == product._id);
        if (item.length == 0) {
            return 0;
        }
        return item[0].quantity;
    }

    const [number, setNumber] = useState(getQuantity());

    const onNumberChange = (isAdd) => {
        if (isAdd == true) {
            setNumber(number + 1);
        } else if (isAdd == false && number >= 1) {
            setNumber(number + -1);
        }
    }

    const onUpdateCart = () => {
        updateCart(product, price, number, true);
        ToastAndroid.show('Thêm sản phẩm thành công', ToastAndroid.BOTTOM);
    }

    return (
        <>
            <View style={styles.productInfoContainer}>
                <Text style={styles.productPrice}>{price}đ</Text>
                <Text style={styles.productTittle}>Chi tiết sản phẩm</Text>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Kích cỡ</Text>
                    <Text style={styles.productDetailText}>{size}</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Xuất xứ</Text>
                    <Text style={styles.productDetailText}>{madein}</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Tình trạng</Text>
                    <Text style={styles.productDetailText}>Còn {quantity} sp</Text>
                </View>
            </View>
            <View style={styles.cartProcessContainer}>
                <View style={styles.processQuantity}>
                    <Text style={styles.quantityText}>Đã chọn {number} sản phẩm</Text>
                    <View style={styles.quantityAction}>
                        <Text onPress={() => onNumberChange(false)} style={styles.removeAction}>-</Text>
                        <Text style={styles.quantity}>{number}</Text>
                        <Text onPress={() => onNumberChange(true)} style={styles.addAction}>+</Text>
                    </View>
                </View>
                <View style={styles.processTotal}>
                    <Text style={styles.totalText}>Tạm tính</Text>
                    <Text style={styles.total}>{number * price}đ</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={onUpdateCart} style={[styles.button, number > 0 ? styles.changeBackgroundColor : null]}>
                    <Text style={styles.buttonText}>Chọn mua</Text>
                </Pressable>
            </View>
        </>
    )
}

export const DetailProduct = (props) => {
    const { navigation, route: { params: { id } } } = props;

    const { onGetProductDetail } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        setIsLoading(true);
        const res = await onGetProductDetail(id);
        setProduct(res);
        setIsLoading(false);
        return () => {
            res;
        };
    }, []);

    if (!product) {
        return (<></>);
    }
    const { name, images, price, size, madein, quantity } = product;
    return (
        <View style={styles.container}>
            {
                isLoading == true ?
                    <Text style={{ textAlign: 'center', paddingTop: 400 }}>Đang tải dữ liệu</Text> :
                    <>
                        <View style={styles.productNameContainer}>
                            <Text style={styles.productName}>{name}</Text>
                        </View>
                        <View style={styles.productImagesContainer}>
                            <PagerView style={styles.productImagesPager}
                                initialPage={0} orientation='horizontal'>
                                {
                                    images.map(img =>
                                        <Image key={Math.random()}
                                            source={{ uri: img }}
                                            style={styles.productImage}
                                            resizeMode='cover' />
                                    )
                                }
                            </PagerView>
                        </View>
                        <PartialView product={product} />
                    </>

            }

        </View>
    );
};

const styles = StyleSheet.create({
    changeBackgroundColor: {
        backgroundColor: '#007537',
    },
    buttonContainer: {
        paddingHorizontal: 24,
        height: 50,
        marginTop: 16,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#ABABAB',
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    total: {
        marginTop: 4,
        textAlign: 'right',
        fontSize: 24,
        fontWeight: '500',
    },
    totalText: {
        color: 'black',
        opacity: 0.6,
    },
    processTotal: {},
    addAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 27.5,
        height: 27.5,
        textAlign: 'center',
        lineHeight: 26,
        color: 'black',
    },
    quantity: {

    },
    removeAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 27.5,
        height: 27.5,
        textAlign: 'center',
        lineHeight: 26,
        color: 'black',
    },
    quantityAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    quantityText: {
        fontSize: 14,
        color: 'black',
        opacity: 0.6,
    },
    processQuantity: {},
    cartProcessContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    productDetailText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3A3A3A',
    },
    productDetail: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#221F1F',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    productTittle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3A3A3A',
        marginTop: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#221F1F'
    },
    productPrice: {
        fontSize: 24,
        fontWeight: '500',
        color: '#007537'
    },
    productInfoContainer: {
        paddingHorizontal: 48,
        paddingVertical: 32,
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productImagesPager: {
        flex: 1,

    },
    productImagesContainer: {
        height: 270,
        width: '100%',
    },
    productName: {
        fontSize: 16,
        fontWeight: '500',
    },
    productNameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
    },
    container: {
        paddingTop: 20,
        flexGrow: 1,
        backgroundColor: 'white',
    }
});
