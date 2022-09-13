import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Search} from './Search';
import {DetailProduct} from './DetailProduct';

const Stack = createStackNavigator();

export const SearchStack = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="DetailProduct" component={DetailProduct} />
        </Stack.Navigator>
    )
}