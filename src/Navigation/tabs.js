import React from 'react';
import {Image,} from 'react-native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import {COLORS, icons} from '../constants';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  const tabscree = [
    {name: 'Home', icon: icons.cutlery},
    {name: 'Like', icon: icons.like},
    {name: 'Search', icon: icons.search},
    {name: 'User', icon: icons.user},
  ];
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
          
        },
      }}>
      {tabscree.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (  
               <Image
              source={tab.icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />)
 
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;
