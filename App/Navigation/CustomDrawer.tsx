import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';

const CustomDrawer = (props:any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: "#081e3d"}}>
        <ImageBackground
          source={require('../assets/Images/menu-bg.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/Images/person.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Shaik Sabier Hussain
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              Field Officer
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{paddingBottom: 80, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15,marginLeft:20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;