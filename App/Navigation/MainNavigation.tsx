import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';
import TabIcon from './TabBarIcon';
import Home from '../Screen/Home';
import Allocation from '../Screen/Allocation';
import Calendar from '../Screen/Calendar';
import Inventory from '../Screen/Inventory';
import DrawerNavigator from './DrawerTab';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            onPress={onPress}>
            <View style={{
                width: 50, height: 50,
                borderRadius: 35,
                backgroundColor: Colors.primary
            }}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

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
                name="Calender"
                component={Calendar}
                options={{
                    tabBarIcon: props => (
                        <TabIcon name="calendar" {...props} label="Calender" />
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


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default MainNavigator;
