import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header/Header';
import Colors from '../constants/Colors';

const Allocation = () => {
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const [selectedDay, setSelectedDay] = useState(getCurrentDate());

  const renderItem = (reservation: any) => {
    return (
      <TouchableOpacity style={styles.assignmentItem}>
        <View style={styles.dateTime}>
          <Text style={{color: Colors.white}}>
            #{reservation.service_number}
          </Text>
          <Text style={{color: Colors.white}}>{reservation.date}</Text>
          <Text style={{color: Colors.white}}>{reservation.time}</Text>
        </View>
        <View style={styles.dataContainer}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: Colors.black,
              }}>
              {reservation.customer}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: Colors.black,
              }}>
              {reservation.location}
            </Text>
            {/* <View style={{flexDirection:'row',alignItems:'center',marginLeft:-5}}>
              <Icon name="map-marker" size={25} color={Colors.primary} />
              <Text>{reservation.location}</Text>
            </View> */}
          </View>
          <Icon name="phone" size={25} color={Colors.primary} />
        </View>
        <View style={styles.dataContainer}>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: Colors.black,
                fontWeight:'bold'
              }}>
              {reservation.Reg_no}
            </Text>
            <Text
              style={{
                fontSize: 15,
              }}>
              {reservation.vehicle}
            </Text>
            <Text>{reservation.job_type}</Text>
          </View>
          <Text style={styles.status}>{reservation.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>
          There is no Work Assigned today.
        </Text>
      </View>
    );
  };

  const recentAssignments = [
    {
      id: '1',
      service_number: 904200,
      icon: 'phone',
      customer: 'Mr. Abdul Hashim',
      location: '100 Fathima St,Doha 5009.',
      vehicle: 'Ashok Layland Truck.',
      job_type: 'Part Replacement.',
      date: '2024-05-13',
      time: '1:15 PM',
      status: 'In Progress',
      mobile: 9988776655,
      Reg_no: 'MH12 AB 1234',
      Vin: 'MA1ZF2GNK2A123456',
      image: require('../assets/Images/Ashok.jpg'),
    },
    {
      id: '2',
      service_number: 904201,
      icon: 'phone',
      customer: 'Mr. Harshad Mehta',
      location: '26 Benson town St,Doha 5009.',
      vehicle: 'Ashok Layland Bus - 63 seater.',
      job_type: 'Standard Inspection.',
      date: '2024-05-30',
      time: '3:15 PM',
      status: 'In Progress',
      mobile: 9988776655,
      Reg_no: 'KA05 CD 5678',
      Vin: 'MALBB51BLNM123457',
      image: require('../assets/Images/AshkBus.jpg'),
    },
    {
      id: '3',
      service_number: 904202,
      icon: 'phone',
      customer: 'Ms. Rehana Baig',
      location: '10 Manzeel road,Doha 50091.',
      vehicle: 'Mercedes C class.',
      job_type: 'Tyre Replacement.',
      date: '2024-05-19',
      time: '1:15 PM',
      status: 'Booked',
      mobile: 9988776655,
      Reg_no: 'DL8C EF 9101',
      Vin: 'MAT448202K1C12345',
      image: require('../assets/Images/Mercedes.jpg'),
    },
    {
      id: '4',
      service_number: 904203,
      icon: 'phone',
      customer: 'Mr. Christian Wong',
      location: 'Mashriq town market,Doha 50059.',
      vehicle: 'Toyota Hycross',
      job_type: 'Part Replacement.',
      date: '2024-05-29',
      time: '4:15 AM',
      status: 'Send to Garage',
      mobile: 9988776655,
      Reg_no: 'TN10 GH 2345',
      Vin: 'MBHRD30BC8R123458',
      image: require('../assets/Images/Toyota.jpg'),
    },
    {
      id: '5',
      service_number: 904203,
      icon: 'phone',
      customer: 'Ms. Richa Menon',
      location: 'Mashriq town market,Doha 50059.',
      vehicle: 'Toyota Sedan',
      job_type: 'Part Replacement.',
      date: '2024-05-29',
      time: '4:15 PM',
      status: 'In Progress',
      mobile: 9988776655,
      Reg_no: 'WB20 IJ 6789',
      Vin: 'MCAUA3MF2KN123459',
      image: require('../assets/Images/Toyota.jpg'),
    },
    {
      id: '6',
      service_number: 904203,
      icon: 'phone',
      customer: 'Mr. Rashid Ahmed Abdali',
      location: 'Mashriq town market,Doha 50059.',
      vehicle: 'Toyota Hycross',
      job_type: 'Part Replacement.',
      date: '2024-05-28',
      time: '4:15 PM',
      status: 'Pending',
      mobile: 9988776655,
      Reg_no: 'GJ01 KL 3456',
      Vin: 'MA6C64AK0KN123460',
      image: require('../assets/Images/Toyota.jpg'),
    },
    {
      id: '7',
      service_number: 904203,
      icon: 'phone',
      customer: 'Mr. Christian Wong',
      location: 'Mashriq town market,Doha 50059.',
      vehicle: 'Ashok Layland Truck',
      job_type: 'Part Replacement.',
      date: '2024-05-27',
      time: '4:15 PM',
      status: 'Send to Garage',
      mobile: 9988776655,
      Reg_no: 'RJ14 MN 7890',
      Vin: 'MD2DSDUZZR123461',
      image: require('../assets/Images/Ashok.jpg'),
    },
    // Add more items as needed
  ];

  const assignmentsByDate = recentAssignments.reduce((acc: any, assignment) => {
    const date = assignment.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(assignment);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Header text="Allocation" icon_name="arrow-left" />
      {/* <Text>{currentMonth}</Text> */}
      <Agenda
        items={assignmentsByDate}
        onDayPress={date => {
          setSelectedDay(date.dateString);
        }}
        selected={selectedDay}
        renderItem={item => renderItem(item)}
        renderEmptyData={renderEmptyDate}
        disabledByDefault={true}
        showOnlySelectedDayItems={true}
      />
    </View>
  );
};

export default Allocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: 'green',
  },
  dayItem: {
    marginLeft: 34,
  },
  assignmentItem: {
    flexDirection: 'column',
    backgroundColor: Colors.Iconwhite, // Equal width for each item, adjust as needed
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    marginVertical: 20,
  },
  dateTime: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  status: {
    fontWeight: '400',
    backgroundColor: Colors.primary,
    padding: 7,
    color: Colors.Iconwhite,
    borderRadius: 15,
  },
});
