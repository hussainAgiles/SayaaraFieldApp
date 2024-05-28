import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Colors from '../constants/Colors'
import ReactNativeCalendarEvents from 'react-native-calendar-events';

const Allocation = () => {

  const [permissionStatus, setPermissionStatus] = useState(null);
  const [calendars, setCalendars] = useState([]);
  const [pickedCal, setPickedCal] = useState(null);

  useEffect(() => {
    const checkAndRequestPermissions = async () => {
      try {
        let status = await ReactNativeCalendarEvents.checkPermissions();
        if (status !== 'authorized') {
          status = await ReactNativeCalendarEvents.requestPermissions();
        }
        setPermissionStatus(status);

        if (status === 'authorized') {
          let fetchedCalendars =
            await ReactNativeCalendarEvents.findCalendars();
          setCalendars(fetchedCalendars);
          let primaryCalendar = fetchedCalendars.find(
            calendar => calendar.isPrimary,
          );
          setPickedCal(primaryCalendar);
        } else {
          Toast.show({
            text1: 'Calendar permissions not granted',
            type: 'error',
          });
        }
      } catch (error) {
        console.log('Error checking or requesting permissions:', error);
      }
    };

    checkAndRequestPermissions();
  }, []);
  return (
    <View style={styles.container}>
     <Header text="Allocation" icon_name="arrow-left"/>
    </View>
  )
}

export default Allocation

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.lightBg,
  }
})