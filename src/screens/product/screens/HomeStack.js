import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from './../screens/Home';
import {Notify } from './../screens/Notify';
import {DetailProduct} from './../screens/DetailProduct';

const Stack = createStackNavigator();

export const HomeStack = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailProduct" component={DetailProduct} />
            <Stack.Screen name="Notify" component={Notify} />
        </Stack.Navigator>
    )
}