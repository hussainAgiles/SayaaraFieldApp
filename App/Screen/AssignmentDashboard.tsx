import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import AssignmentTabs from '../Navigation/AssignmentTabs';

const AssignmentDashboard = ({route}: any) => {
  const assignmentData = route?.params;
  return (
    <MenuProvider>
      <View style={{flex: 1}}>
        <AssignmentTabs data={assignmentData} />
      </View>
    </MenuProvider>
  );
};

export default AssignmentDashboard;


