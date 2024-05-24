import {
  FlatList,
  Image,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../components/Header/CustomHeader';
import {Leadsstyles} from '../styles/GlobalStyles';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../Navigation/Navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Home = () => {
  LogBox.ignoreAllLogs();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const boxesData = [
    {label: 'Today', number: 12},
    {label: 'Tommorrow', number: '05'},
    {label: 'Pending', number: '03'},
  ];

  const recentAssignments = [
    {
      id: '1',
      service_number: 904200,
      icon: 'phone',
      customer: 'Mr. Abdul Hashim',
      location: '100 Fathima St,Doha 5009.',
      vehicle: 'Ashok Layland Truck.',
      job_type: 'Part Replacement.',
      date: 'May 13th 2024',
      time: '1:15 PM',
      status:'In Progress',
      mobile:9988776655,
      Reg_no: 'MH12 AB 1234',
      Vin:'MA1ZF2GNK2A123456',
      image:require('../assets/Images/Ashok.jpg')
    },
    {
      id: '2',
      service_number: 904201,
      icon: 'phone',
      customer: 'Mr. Harshad Mehta',
      location: '26 Benson town St,Doha 5009.',
      vehicle: 'Ashok Layland Bus - 63 seater.',
      job_type: 'Standard Inspection.',
      date: 'May 16th 2024',
      time: '3:15 PM',
      status:'In Progress',
      mobile:9988776655,
      Reg_no: 'KA05 CD 5678',
      Vin:'MALBB51BLNM123457',
      image:require('../assets/Images/AshkBus.jpg')
    },
    {
      id: '3',
      service_number: 904202,
      icon: 'phone',
      customer: 'Ms. Rehana Baig',
      location: '10 Manzeel road,Doha 50091.',
      vehicle: 'Mercedes C class.',
      job_type: 'Tyre Replacement.',
      date: 'May 19th 2024',
      time: '1:15 PM',
      status:'Booked',
      mobile:9988776655,
      Reg_no: 'DL8C EF 9101',
      Vin:'MAT448202K1C12345',
      image:require('../assets/Images/Mercedes.jpg')
    },
    {
      id: '4',
      service_number: 904203,
      icon: 'phone',
      customer: 'Mr. Christian Wong',
      location: 'Mashriq town market,Doha 50059.',
      vehicle: 'Toyota Hycross',
      job_type: 'Part Replacement.',
      date: 'May 20th 2024',
      time: '4:15 AM',
      status:'Send to Garage',
      mobile:9988776655,
      Reg_no: 'TN10 GH 2345',
      Vin:'MBHRD30BC8R123458',
      image:require('../assets/Images/Toyota.jpg')
    },
    {
      id: '5',
      service_number: 904203,
      icon: 'phone',
      customer: 'Ms. Richa Menon',
      location: 'Mashriq town market,Doha 50059.',
      vehicle: 'Toyota Sedan',
      job_type: 'Part Replacement.',
      date: 'May 20th 2024',
      time: '4:15 PM',
      status:'In Progress',
      mobile:9988776655,
      Reg_no: 'WB20 IJ 6789',
      Vin:'MCAUA3MF2KN123459',
      image:require('../assets/Images/Toyota.jpg')
    },
    {
      id: '6',
      service_number: 904203,
      icon: 'phone',
      customer: 'Mr. Rashid Ahmed Abdali',
      location: 'Mashriq town market,Doha 50059.',
      vehicle: 'Toyota Hycross',
      job_type: 'Part Replacement.',
      date: 'May 20th 2024',
      time: '4:15 PM',
      status:'Pending',
      mobile:9988776655,
      Reg_no: 'GJ01 KL 3456',
      Vin:'MA6C64AK0KN123460',
      image:require('../assets/Images/Toyota.jpg')
    },
    {
      id: '7',
      service_number: 904203,
      icon: 'phone',
      customer: 'Mr. Christian Wong',
      location: 'Mashriq town market,Doha 50059.',
      vehicle: 'Ashok Layland Truck',
      job_type: 'Part Replacement.',
      date: 'May 20th 2024',
      time: '4:15 PM',
      status:'Send to Garage',
      mobile:9988776655,
      Reg_no: 'RJ14 MN 7890',
      Vin:'MD2DSDUZZR123461',
      image:require('../assets/Images/Ashok.jpg')
    },
    // Add more items as needed
  ];

  const openDrawer = () => {
    navigation.openDrawer();
  };


  const renderAssignments = (data:any) => {
    return (
      <TouchableOpacity style={styles.assignmentItem} onPress={()=>{
        navigation.navigate('Assignment',{assignment : data?.item})
      }}>
        <View style={styles.dateTime}>
          <Text style={{color: Colors.white}}>
            #{data?.item?.service_number}
          </Text>
          <Text style={{color: Colors.white}}>{data?.item?.date}</Text>
          <Text style={{color: Colors.white}}>{data?.item?.time}</Text>
        </View>
        <View style={styles.dataContainer}>
          <View>
          <Text style={{fontSize:18,fontWeight:'bold',color:Colors.black}}>{data?.item?.customer}</Text>
          <Text>{data?.item?.location}</Text>
          </View>
          <Icon name="phone" size={25} color={Colors.primary}/>
          
        </View>
        <View style={styles.dataContainer}>
          <View>
          <Text>{data?.item?.vehicle}</Text>
          <Text>{data?.item?.job_type}</Text>
          </View>
          <Text style={styles.status}>{data?.item?.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: Colors.primary,
          padding: 20,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <View style={styles.ProfileContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={openDrawer}>
              <Icon name="menu" size={30} color={Colors.Iconwhite} />
            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
              <Text style={styles.NameText}>Mr. Shaik Sabier Hussain</Text>
              <Text style={styles.roleText}>Field Officer</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: Colors.Iconwhite,
                borderRadius: 25,
              }}>
              <Image
                source={require('../assets/Images/person.jpg')}
                style={{height: 50, width: 50, borderRadius: 25}}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <View style={styles.boxContainer}>
          {boxesData.map((box, index) => (
            <View style={{flex: 1}} key={index}>
              <View key={index} style={styles.box}>
                <Text style={styles.boxText}>{box.number}</Text>
                <Text style={styles.boxLabel}>{box.label}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.headerView}>
          <Text style={styles.HeaderText}>Today's Assignment</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
        <View style={{marginTop: 20}}>
          <FlatList data={recentAssignments} renderItem={renderAssignments} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    paddingBottom: 120,
  },
  ProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roleText: {
    color: Colors.Iconwhite,
    fontSize: 12,
    fontWeight: '600',
  },
  NameText: {
    color: Colors.Iconwhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  box: {
    backgroundColor: Colors.Iconwhite,
    padding: 15,
    margin: 5,
    elevation: 4,
    borderWidth: 0.8,
    borderColor: Colors.lightGrey,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 25,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  boxLabel: {
    fontSize: 14,
    color: Colors.lightGreish,
    textAlign: 'center',
    fontWeight:'500'
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  HeaderText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '600',
  },
  viewAllText: {
    color: Colors.black,
    fontSize: 14,
  },
  assignmentItem: {
    flexDirection: 'column',
    backgroundColor: Colors.Iconwhite, // Equal width for each item, adjust as needed
    marginHorizontal: 18,
    marginBottom: 20,
    borderRadius:5
  },
  dateTime:{
    backgroundColor: Colors.primary,flexDirection:'row',justifyContent:'space-between',padding:10
  },
  dataContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:10,
    alignItems:'center'
  },
  status:{
    fontWeight:"400",backgroundColor:Colors.primary,padding:7,color:Colors.Iconwhite,borderRadius:15
  }
});
