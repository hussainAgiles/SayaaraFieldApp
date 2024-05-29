import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../navigation/Navigation';

type AssignmentDetailsProps = {
  extraData: any;
};

interface Checkout {
  id: number;
  status:any;
}

const AssignmentDetails: React.FC<AssignmentDetailsProps> = ({
  route,
  extraData,
}: any) => {
  const assignmentData = extraData || route?.params?.data;
  // console.log("Recieved props === ",assignmentData)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [workRecords, setWorkRecords] = useState([]);
  const [checkoutData, setCheckoutData] = useState<Checkout[]>([]);

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

  // console.log("Work Records",workRecords)

  const deleteRecord = async (index: number) => {
    Alert.alert(
      'Are you sure?',
      "You won't be able to revert this!",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              const updatedRecords = [...workRecords];
              updatedRecords.splice(index, 1);
              await AsyncStorage.setItem(
                'workRecords',
                JSON.stringify(updatedRecords),
              );
              setWorkRecords(updatedRecords);
              Toast.show({type: 'success', text1: 'Deleted Successfully'});
            } catch (error) {
              console.error('Error deleting record', error);
              Toast.show({type: 'error', text1: 'An error occurred'});
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  const editRecord = (data: any) => {
    // console.log("Record ===",data?.item);
    navigation.navigate('WorkAssignedForm', {
      mode: 'edit',
      id: data?.item,
      onUpdateStatus: handleUpdateStatus,
    });
  };

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
          <Text style={{width: '30%', fontSize: 15, fontWeight: '500'}}>
            {data?.item?.workType}
          </Text>
          <Text style={{width: '50%', fontSize: 15, fontWeight: '500'}}>
            {data?.item?.description}
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: '15%'}}>
          <Icon
            name="delete"
            size={27}
            color={Colors.red}
            onPress={() => deleteRecord(data?.index)}
          />
          <Icon
            name="pencil"
            size={27}
            color={Colors.primary}
            onPress={() => editRecord(data)}
          />
        </View>
      </View>
    );
  };

  const handleUpdateStatus = (updatedItems: any) => {
    // Update checkoutItems in parent component
    setCheckoutData(updatedItems);
    // console.log("updatedItems === ",updatedItems)
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
              #{assignmentData?.service_number}
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
              onPress={() => {
                navigation.navigate('CheckList', {data: assignmentData});
              }}
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.primary,
                padding: 12,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: Colors.Iconwhite,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                First Free Service
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.green,
                padding: 12,
                borderRadius: 25,
                width: 120,
              }}>
              {checkoutData.status == null ? (
              <Text
                style={{
                  color: Colors.Iconwhite,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Open
              </Text>
            ):  <Text
            style={{
              color: Colors.Iconwhite,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {checkoutData?.status}
          </Text>}
            </TouchableOpacity>
          </View>
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
                  {assignmentData?.customer}
                </Text>
                <Text>{assignmentData?.mobile}</Text>
              </View>
              <Icon name="phone" size={25} color={Colors.primary} />
            </View>
            {/* Location */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="map-marker" size={25} color={Colors.primary} />
              <Text
                style={{color: Colors.black, fontWeight: '500', marginLeft: 5}}>
                {assignmentData?.location}
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
                  {assignmentData?.date}
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
                  {assignmentData?.time}
                </Text>
              </View>
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
                {assignmentData.Reg_no}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <Image
                source={assignmentData?.image}
                style={{height: 80, width: 80}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {assignmentData?.vehicle}
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
                <Text>{assignmentData.Reg_no}</Text>
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
                <Text>{assignmentData.Vin}</Text>
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
                  marginLeft: '35%',
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
              Work Allotment
            </Text>
            <TouchableOpacity
              onPress={useCallback(() => {
                navigation.navigate('WorkAssignedForm', {
                  record: {item: assignmentData},
                  onUpdateStatus: handleUpdateStatus,
                });
              }, [])}>
              <Icon name="plus" size={25} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <FlatList data={workRecords} renderItem={renderItem} />
        </ScrollView>
      </View>
    </MenuProvider>
  );
};

export default AssignmentDetails;

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
