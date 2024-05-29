import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Allocation from '../Screen/Allocation';
import Inventory from '../Screen/Inventory';
import Colors from '../constants/Colors';
import DrawerNavigator from './DrawerTab';
import TabIcon from './TabBarIcon';

const Tab = createBottomTabNavigator();
const MainNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors.black,
                tabBarLabelStyle: {
                    fontSize: 14,
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#ffffff',
                    height: 70,
                },
                headerShown: false,
                tabBarShowLabel: false,
            }}>
            <Tab.Screen
                name="Home"
                component={DrawerNavigator}
                options={{
                    tabBarIcon: props => (
                        <TabIcon name="home-outline" {...props} label="Home" />
                    ),
                    unmountOnBlur:true
                }}
            />
            <Tab.Screen
                name="Allocation"
                component={Allocation}
                options={{
                    tabBarIcon: props => (
                        <TabIcon name="notebook-check-outline"  {...props} label="Allocation" />
                    ),
                    unmountOnBlur:true
                }}
            />

            <Tab.Screen
                name="Inventory"
                component={Inventory}
                options={{
                    tabBarIcon: props => (
                        <TabIcon
                            name="store"
                            {...props}
                            label="Inventory"
                        />
                    ),
                    unmountOnBlur:true
                }}
            />
        </Tab.Navigator>
    );
};




export default MainNavigator;
