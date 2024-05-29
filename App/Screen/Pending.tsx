import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {pendingStyles} from '../styles/GlobalStyles';
import Header from '../components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../Navigation/Navigation';
import Colors from '../constants/Colors';

const Pending = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
      date: '2024-05-16',
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
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const filterTodayAssignments = (assignments:any) => {
    const todayDate = getCurrentDate();
    const result =  assignments.filter((assignment:any) => assignment.date < todayDate); 
    return result;
  };



  const renderAssignments = (data: any) => {
    return (
      <TouchableOpacity style={pendingStyles.assignmentItem} onPress={() => {
        navigation.navigate('Assignment', { assignment: data?.item })
      }}>
        <View style={pendingStyles.dateTime}>
          <Text style={pendingStyles.dateText}>#{data?.item?.service_number}</Text>
          <Text style={pendingStyles.dateText}>{data?.item?.date}</Text>
          <Text style={pendingStyles.dateText}>{data?.item?.time}</Text>
        </View>
        <View style={pendingStyles.dataContainer}>
          <View>
            <Text style={pendingStyles.customerText}>{data?.item?.customer}</Text>
            <Text>{data?.item?.location}</Text>
          </View>
          <Icon name="phone" size={25} color={Colors.primary} />
        </View>
        <View style={pendingStyles.dataContainer}>
          <View>
            <Text>{data?.item?.vehicle}</Text>
            <Text>{data?.item?.job_type}</Text>
          </View>
          <Text style={pendingStyles.status}>{data?.item?.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={pendingStyles.container}>
      <Header text="Pending Assignment" icon_name="arrow-left" />
      <ScrollView
        contentContainerStyle={pendingStyles.container}
        showsVerticalScrollIndicator={false}>
        <View style={pendingStyles.contentContainer}>
          <View style={pendingStyles.assignmentList}>
            <FlatList
              data={filterTodayAssignments(recentAssignments)}
              renderItem={renderAssignments}
              ListEmptyComponent={
                <Text style={pendingStyles.noDataText}>No data found.</Text>
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Pending;
