import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './MainNavigation';
import AssignmentDetails from '../Screen/AssignmentDetails';
import AssignmentDashboard from '../Screen/AssignmentDashboard';
import VehicleDetails from '../Screen/VehicleDetails';
import WorkAssignedForm from '../Screen/WorkAssignedForm';
import PartsListing from '../components/Parts/PartsListing';
import PartsStockList from '../components/Parts/PartsStockList';
import CheckList from '../components/CheckList/CheckList';

export type RootStackParamList = {
  Root: undefined;
  Assignment: any;
  VehicleDetails: any;
  WorkAssignedForm: any;
  PartsStockList: any;
  PartsListing: any;
  CheckList: any;
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
        name="PartsListing"
        component={PartsListing}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PartsStockList"
        component={PartsStockList}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CheckList"
        component={CheckList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
