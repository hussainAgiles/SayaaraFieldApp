import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Info from '../Screen/Info';
import TabIcon from './TabBarIcon';
import DashBoard from '../Screen/Home';
import CustomDrawer from './CustomDrawer';
import Home from '../Screen/Home';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={() => ({
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          height: 60,
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="information" component={Info}/>   
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
