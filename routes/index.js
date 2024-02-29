import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from "react-native";



import Home from "../pages/Home";
import Login from "../pages/Login";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Routes () {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name=" " component={Login} options={{
                headerShown: false
            }}
            />
          
            <Drawer.Screen name="Tela Home" component={Home} options={{
                headerTitle: () => (
                    <Image
                    source={require('../assets/logosenai.png')}
                    style={{width: 170, height: 45}}
                    />
                ),
                headerTitleAlign: 'center'
            }}
            
            />
         </Drawer.Navigator>
        
    )
}

export default Routes;