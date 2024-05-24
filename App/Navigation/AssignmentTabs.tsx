import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabIcon from './TabBarIcon';
import AssignmentDetails from '../Screen/AssignmentDetails';
import CustomerInvoice from '../Screen/CustomerInvoice';
import Messages from '../Screen/Messages';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

type AssignmentTabsProps = {
    data: any;
  };
  

const AssignmentTabs: React.FC<AssignmentTabsProps> = ({data}: any) => {
    // console.log("Assifnment tabs",data)
  return (
    <Tab.Navigator
      initialRouteName="Work"
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
        name="Work"
        options={{
          tabBarIcon: props => <TabIcon name="cogs" {...props} label="Work" />,
          unmountOnBlur: true,
        }}>
        {props => <AssignmentDetails {...props} extraData={data?.assignment}/>}
      </Tab.Screen>

      <Tab.Screen
        name="Customer Voice"
        component={CustomerInvoice}
        options={{
          tabBarIcon: props => (
            <TabIcon name="account-voice" {...props} label="Customer Voice" />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: props => (
            <TabIcon
              name="message-reply-text-outline"
              {...props}
              label="Messages"
            />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default AssignmentTabs;

const styles = StyleSheet.create({});
