import React from 'react'
import { Image, Touchable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './screens/HomeStack';
import { Cart } from './screens/Cart';
import { ProfileStack } from './screens/ProfileStack';
import { SearchStack } from './screens/SearchStack';
import { Home } from './screens/Home';
import { List } from './screens/List';

const Tab = createBottomTabNavigator();

export const ProductNavigation = (props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#D77189",
                tabBarIcon: ({ focused }) => {
                    if (route.name == "Trang chủ") {
                        return <Image source={require('../../assets/images/iconhome.png')}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#D77189" : "#000000",
                            }} />
                    } else if (route.name == "Danh mục") {
                        return <Image source={require('../../assets/images/iconlist.png')}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#D77189" : "#000000",
                            }} />
                    } else if (route.name == "Giỏ hàng") {
                        return <Image source={require('../../assets/images/iconcart.png')}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#D77189" : "#000000",
                            }} />
                    } else if (route.name == "Tài khoản") {
                        return <Image source={require('../../assets/images/iconprofile.png')}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#D77189" : "#000000",
                            }} />
                    }
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Trang chủ" component={HomeStack} />
            <Tab.Screen name="Danh mục" component={List} />
            <Tab.Screen name="Giỏ hàng" component={Cart} />
            <Tab.Screen name="Tài khoản" component={SearchStack} />
        </Tab.Navigator>
    )
}
