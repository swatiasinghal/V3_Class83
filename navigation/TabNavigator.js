
import Feed from '../screens/Feed'
import CreateStory from '../screens/CreateStory';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from "react"

import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator()


const BottomTabNavigator = ()=>
{


return (
      <Tab.Navigator
      labeled={false}
      barStyle={StyleSheet.bottomTabStyle}
      screenOptions={({route})=>
      ({
        tabBarIcon:({focused,color,size})=>
        {
         
           let iconName;
           if(route.name==="Feed")
           {
             iconName=focused
             ? "home"
             :"home-outline"
           }
   
           else if (route.name==="CreateStory")
           {
             iconName=focused
             ? "add-circle"
             :"add-circle-outline"
           }
   
           return <Ionicons name ={iconName} size={size} color={color}/>
         
        }
      })}
      activeColor={'#ee8249'}
      inacticeColor={'grey'}

      tabBarOptions={{activeTintColor:'tomato',
     inactiveTintColor:'grey'}}
    
      >
       <Tab.Screen name="Feed" component ={Feed}/>
       <Tab.Screen name="CreateStory" component ={CreateStory}/>
      </Tab.Navigator>
   )

    }

    const styles= StyleSheet.create(
      {
        bottomTabStyle:
        {
          backgroundColor:"#2f345d",
          height:"8%",
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          overflow:"hidden",
          position:"absolute"

        },

        icons:
        {
         // width:RFValue(50),
         // height:RFValue(50)

        }
      }
    )

    export default BottomTabNavigator