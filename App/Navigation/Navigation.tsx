import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './MainNavigation';
import AssignmentDetails from '../Screen/AssignmentDetails';
import AssignmentDashboard from '../Screen/AssignmentDashboard';
import VehicleDetails from '../Screen/VehicleDetails';
import WorkAssignedForm from '../Screen/WorkAssignedForm';
import PartsList from '../components/Parts/PartsList';

export type RootStackParamList = {
  Root: undefined;
  Assignment: any;
  VehicleDetails: any;
  WorkAssignedForm: any;
  PartsList:any
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Root"
        component={MainNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Assignment"
        component={AssignmentDashboard}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="WorkAssignedForm"
        component={WorkAssignedForm}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="VehicleDetails"
        component={VehicleDetails}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PartsList"
        component={PartsList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
