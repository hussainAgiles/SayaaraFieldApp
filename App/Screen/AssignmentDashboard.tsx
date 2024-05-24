import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AssignmentTabs from '../Navigation/AssignmentTabs';
import {MenuProvider} from 'react-native-popup-menu';

const AssignmentDashboard = ({route}: any) => {
    const assignmentData = route?.params
  return (
    <MenuProvider>
    <View style={{flex: 1}}>
        <AssignmentTabs data={assignmentData} />
    </View>
    </MenuProvider>
  );
};

export default AssignmentDashboard;

const styles = StyleSheet.create({});
