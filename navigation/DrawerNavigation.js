import React from "react"
import Profile  from "../screens/Profile"
import { createDrawerNavigator } from "@react-navigation/drawer"
import BottomTabNavigator from "./TabNavigator"

const Drawer = createDrawerNavigator()
const DrawerNavigator = ()=>
{
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component={BottomTabNavigator}/>
            <Drawer.Screen name = "Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator