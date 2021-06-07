import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Pontos from './pages/Pontos';

const Stack = createStackNavigator();

const Routes = () => {
    return( 
       <NavigationContainer>
           <Stack.Navigator>    
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Pontos" component={Pontos}/>
           </Stack.Navigator>
       </NavigationContainer> 
    )
}

export default Routes;