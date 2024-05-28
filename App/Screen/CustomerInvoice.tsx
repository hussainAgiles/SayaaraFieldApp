import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import Colors from '../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigation';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

type CustomerDetailsProps = {
  extraData: any;
};

const CustomerInvoice: React.FC<CustomerDetailsProps> = ({
  route,
  extraData,
}: any) => {
  const assignmentData = extraData || route?.params?.data;
  // console.log("Recieved props === ",assignmentData)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [workRecords, setWorkRecords] = useState([]);
  const [checkoutData, setCheckoutData] = useState([]);

  // console.log("Record ===",WorkRecords);

  const handleMenuSelect = (value: any) => {
    switch (value) {
      case 'Vehicle Details':
        navigation.navigate('VehicleDetails');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchWorkAssigned();
  }, [workRecords]);

  const fetchWorkAssigned = async () => {
    try {
      const records = await AsyncStorage.getItem('workRecords');
      if (records) {
        setWorkRecords(JSON.parse(records));
      }
    } catch (error) {
      console.error('Error fetching work records', error);
    }
  };

  const dummyServices = [
    {
      "service_id": "001",
      "service_name": "Oil Change",
      "description": "Regular oil change service for engine maintenance",
      "price": 50.00,
      "duration": "1 hour"
    },
    {
      "service_id": "002",
      "service_name": "Tire Rotation",
      "description": "Rotation of tires for even wear and tear",
      "price": 30.00,
      "duration": "30 minutes"
    },
    {
      "service_id": "003",
      "service_name": "Brake Inspection",
      "description": "Thorough inspection of brake system for safety",
      "price": 40.00,
      "duration": "45 minutes"
    },
    {
      "service_id": "004",
      "service_name": "Wheel Alignment",
      "description": "Adjustment of wheel angles for proper vehicle handling",
      "price": 60.00,
      "duration": "1 hour"
    },
    {
      "service_id": "005",
      "service_name": "Coolant Flush",
      "description": "Replacement of old coolant with fresh coolant",
      "price": 70.00,
      "duration": "1.5 hours"
    }
  ]
  

  const renderItem = (data: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          paddingVertical: 10,
          alignItems: 'center',
          backgroundColor: Colors.Iconwhite,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{ fontSize: 15, fontWeight: '500'}}>
            {data?.item?.service_name}
          </Text>
          {/* <Text style={{width: '60%', fontSize: 15, fontWeight: '500',marginLeft:20}}>
            {data?.item?.description}
          </Text> */}
        </View>
      </View>
    );
  };

  const handleUpdateStatus = (updatedItems: any) => {
    // Update checkoutItems in parent component
    setCheckoutData(updatedItems);
    console.log('updatedItems === ', updatedItems);
  };

  return (
    <MenuProvider>
      <View style={styles.container}>
        <View style={styles.Container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name={'arrow-left'} color={Colors.black} size={28} />
            </TouchableOpacity>
            <Text style={styles.Heading}>
              {' '}
              {/* #{assignmentData?.service_number} */}
              #904200
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="tools"
              size={20}
              color={Colors.black}
              style={{paddingHorizontal: 3}}
              onPress={() => {
                navigation.navigate('PartsListing', {data: assignmentData});
              }}
            />
            <Icon
              name="car"
              size={25}
              color={Colors.black}
              style={{paddingHorizontal: 3}}
            />
            <Icon
              name="check-underline-circle-outline"
              size={25}
              color={Colors.black}
              style={{paddingHorizontal: 3}}
            />
            <Menu>
              <MenuTrigger>
                <Icon name="dots-vertical" size={24} color={Colors.black} />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() => handleMenuSelect('documents')}>
                  <Text style={styles.menuText}>Vehicle Details</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            marginTop: 10,
            marginHorizontal: 20,
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                backgroundColor: Colors.primary,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <Text
                style={{
                  color: Colors.Iconwhite,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Customer Details
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: 18,
                    color: Colors.black,
                    fontWeight: 'bold',
                    paddingVertical: 3,
                  }}>
                  {/* {assignmentData?.customer} */}
                  Mr. Marcus Stoinis
                </Text>
                <Text>
                  {/* {assignmentData?.mobile} */}
                  9988776655
                  </Text>
              </View>
              <Icon name="phone" size={25} color={Colors.primary} />
            </View>
            {/* Location */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="map-marker" size={25} color={Colors.primary} />
              <Text
                style={{color: Colors.black, fontWeight: '500', marginLeft: 5}}>
                {/* {assignmentData?.location} */}
                100, Fathima road,Doha
              </Text>
            </View>
            {/* date and Time */}
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 7,
                }}>
                <Icon name="calendar" size={25} color={Colors.primary} />
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  {/* {assignmentData?.date} */}
                  06 May 23
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 7,
                  marginLeft: 25,
                }}>
                <Icon name="clock" size={25} color={Colors.primary} />
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  {/* {assignmentData?.time} */}
                  11:05 PM
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={{backgroundColor:Colors.primary,padding:12,borderRadius:25}}>
                <Text style={{color:Colors.Iconwhite,textAlign:'center',fontWeight:"bold"}}>First Free Service</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:Colors.green,padding:12,borderRadius:25,width:120}}>
                <Text style={{color:Colors.Iconwhite,textAlign:'center',fontWeight:"bold"}}>Open</Text>
              </TouchableOpacity>
            </View>

          </View>
          {/* Vehicle Details */}
          <View style={{borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
            <View
              style={{
                backgroundColor: Colors.primary,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                marginTop: 10,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}>
              <Text
                style={{
                  color: Colors.Iconwhite,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {/* {assignmentData.Reg_no} */}
                KA02MJ9879
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <Image
                source={require('../assets/Images/Toyota.jpg')}
                style={{height: 80, width: 80}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {/* {assignmentData?.vehicle} */}
                Toyota Urban Cruiser Premium 
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  Registration Number
                </Text>
                <Text>
                  {/* {assignmentData.Reg_no} */}
                  KA02MJ9879
                  </Text>
              </View>
              <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  VIN
                </Text>
                <Text>
                  {/* {assignmentData.Vin} */}
                  1C4PJLCB4FW561396
                  </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  Last Service
                </Text>
                <Text>12 April 2024</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  paddingHorizontal: 10,
                  marginLeft: '36%',
                }}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  Last Visit KM’s
                </Text>
                <Text>75876</Text>
              </View>
            </View>
          </View>

          {/* Work Alootment part */}
          <View
            style={{
              backgroundColor: Colors.primary,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: Colors.Iconwhite,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Customer Invoice
            </Text>
          </View>
          <FlatList data={dummyServices} renderItem={renderItem} />
        </ScrollView>
      </View>
    </MenuProvider>
  );
};

export default CustomerInvoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  Container: {
    backgroundColor: Colors.lightBg,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Heading: {
    fontSize: 20,
    marginLeft: 10,
    color: Colors.black,
    fontWeight: 'bold',
    fontFamily: 'Poppins-ExtraBold',
    textAlign: 'left',
  },
  menuText: {
    padding: 10,
    fontSize: 16,
  },
});
