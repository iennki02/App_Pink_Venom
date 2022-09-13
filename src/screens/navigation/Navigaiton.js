import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProductNavigation } from '../product/ProductNavigation';
import {UserNavigation} from '../user/UserNavigation';

export const Navigation = () => {
    // const { isLoggedIn } = useContext(UserContext);
    
    const [login, setLogin] = useState(true);
    return (
        <NavigationContainer>
            {
                (login == true) ?
                <ProductNavigation/> : <UserNavigation/>
                // <ProductNavigation/>
                // <UserNavigation/>
            }
        </NavigationContainer>
    )
}

