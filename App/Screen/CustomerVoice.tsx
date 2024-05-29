import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../navigation/Navigation';
import { customerVoiceStyles } from '../styles/GlobalStyles';

type CustomerDetailsProps = {
  extraData: any;
};

const CustomerVoice: React.FC<CustomerDetailsProps> = ({ route, extraData }:any) => {
  const assignmentData = extraData || route?.params?.data;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [workRecords, setWorkRecords] = useState([]);
 
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
  }, []);

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
      service_id: "001",
      service_name: "Oil Change",
      description: "Regular oil change service for engine maintenance",
      price: 50.00,
      duration: "1 hour"
    },
    {
      service_id: "002",
      service_name: "Tire Rotation",
      description: "Rotation of tires for even wear and tear",
      price: 30.00,
      duration: "30 minutes"
    },
    {
      service_id: "003",
      service_name: "Brake Inspection",
      description: "Thorough inspection of brake system for safety",
      price: 40.00,
      duration: "45 minutes"
    },
    {
      service_id: "004",
      service_name: "Wheel Alignment",
      description: "Adjustment of wheel angles for proper vehicle handling",
      price: 60.00,
      duration: "1 hour"
    },
    {
      service_id: "005",
      service_name: "Coolant Flush",
      description: "Replacement of old coolant with fresh coolant",
      price: 70.00,
      duration: "1.5 hours"
    }
  ];

  const renderItem = (data: any) => (
    <View style={customerVoiceStyles.itemContainer}>
      <View style={customerVoiceStyles.itemInnerContainer}>
        <Text style={customerVoiceStyles.itemText}>{data?.item?.service_name}</Text>
      </View>
    </View>
  );


  return (
    <MenuProvider>
      <View style={customerVoiceStyles.container}>
        <View style={customerVoiceStyles.Container}>
          <View style={customerVoiceStyles.headerLeftContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name={'arrow-left'} color={Colors.black} size={28} />
            </TouchableOpacity>
            <Text style={customerVoiceStyles.Heading}>#904200</Text>
          </View>
          <View style={customerVoiceStyles.headerRightContainer}>
            <Icon
              name="tools"
              size={20}
              color={Colors.black}
              style={customerVoiceStyles.iconPadding}
              onPress={() => navigation.navigate('PartsListing', { data: assignmentData })}
            />
            <Icon
              name="car"
              size={25}
              color={Colors.black}
              style={customerVoiceStyles.iconPadding}
            />
            <Icon
              name="check-underline-circle-outline"
              size={25}
              color={Colors.black}
              style={customerVoiceStyles.iconPadding}
            />
            <Menu>
              <MenuTrigger>
                <Icon name="dots-vertical" size={24} color={Colors.black} />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() => handleMenuSelect('Vehicle Details')}>
                  <Text style={customerVoiceStyles.menuText}>Vehicle Details</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        <ScrollView contentContainerStyle={customerVoiceStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
          <View style={customerVoiceStyles.sectionContainer}>
            <View style={customerVoiceStyles.sectionHeader}>
              <Text style={customerVoiceStyles.sectionHeaderText}>Customer Details</Text>
            </View>
            <View style={customerVoiceStyles.customerDetailsContainer}>
              <View style={customerVoiceStyles.customerTextContainer}>
                <Text style={customerVoiceStyles.customerNameText}>Mr. Abdul Hashim</Text>
                <Text>9988776655</Text>
              </View>
              <Icon name="phone" size={25} color={Colors.primary} />
            </View>
            <View style={customerVoiceStyles.locationContainer}>
              <Icon name="map-marker" size={25} color={Colors.primary} />
              <Text style={customerVoiceStyles.locationText}>100, Fathima road, Doha</Text>
            </View>
            <View style={customerVoiceStyles.dateTimeContainer}>
              <View style={customerVoiceStyles.dateContainer}>
                <Icon name="calendar" size={25} color={Colors.primary} />
                <Text style={customerVoiceStyles.dateTimeText}>06 May 23</Text>
              </View>
              <View style={customerVoiceStyles.timeContainer}>
                <Icon name="clock" size={25} color={Colors.primary} />
                <Text style={customerVoiceStyles.dateTimeText}>11:05 PM</Text>
              </View>
            </View>
            <View style={customerVoiceStyles.serviceStatusContainer}>
              <TouchableOpacity style={customerVoiceStyles.serviceButton}>
                <Text style={customerVoiceStyles.serviceButtonText}>First Free Service</Text>
              </TouchableOpacity>
              <TouchableOpacity style={customerVoiceStyles.statusButton}>
                <Text style={customerVoiceStyles.statusButtonText}>Open</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={customerVoiceStyles.vehicleDetailsContainer}>
            <View style={customerVoiceStyles.vehicleDetailsHeader}>
              <Text style={customerVoiceStyles.vehicleDetailsHeaderText}>KA02MJ9879</Text>
            </View>
            <View style={customerVoiceStyles.vehicleInfoContainer}>
              <Image
                source={require('../assets/Images/Toyota.jpg')}
                style={customerVoiceStyles.vehicleImage}
                resizeMode="contain"
              />
              <Text style={customerVoiceStyles.vehicleNameText}>Toyota Urban Cruiser Premium</Text>
            </View>
            <View style={customerVoiceStyles.registrationVinContainer}>
              <View style={customerVoiceStyles.registrationContainer}>
                <Text style={customerVoiceStyles.registrationText}>Registration Number</Text>
                <Text>KA02MJ9879</Text>
              </View>
              <View style={customerVoiceStyles.vinContainer}>
                <Text style={customerVoiceStyles.vinText}>VIN</Text>
                <Text>1C4PJLCB4FW561396</Text>
              </View>
            </View>
            <View style={customerVoiceStyles.lastServiceContainer}>
              <View style={customerVoiceStyles.lastServiceDetails}>
                <Text style={customerVoiceStyles.lastServiceText}>Last Service</Text>
                <Text>12 April 2024</Text>
              </View>
              <View style={customerVoiceStyles.lastVisitDetails}>
                <Text style={customerVoiceStyles.lastVisitText}>Last Visit KM’s</Text>
                <Text>75876</Text>
              </View>
            </View>
          </View>
          <View style={customerVoiceStyles.workAllotmentHeader}>
            <Text style={customerVoiceStyles.workAllotmentHeaderText}>Customer Voice</Text>
          </View>
          <FlatList data={dummyServices} renderItem={renderItem} />
        </ScrollView>
      </View>
    </MenuProvider>
  );
};

export default CustomerVoice;


