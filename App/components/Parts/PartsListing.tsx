import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigation';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import PartsStockList from './PartsStockList';

const PartsListing = (data: any) => {
  const recordData = data?.route?.params?.data;
  const [checkoutItems, setCheckoutItems] = useState([]);

  // console.log('Recorded Data = ', recordData);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleMenuSelect = (value: any) => {
    switch (value) {
      case 'Vehicle Details':
        navigation.navigate('VehicleDetails');
        break;
      default:
        break;
    }
  };

  const renderItem = (event: any) => {
    if (event?.item?.qty > 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderRadius: 10,
              elevation: 7,
              padding: 15,
              backgroundColor: Colors.Iconwhite,
              marginVertical: 6,
              flexDirection: 'row',
              width: '84%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: Colors.black,
              }}>
              {event?.item?.item_name}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity>
                <Icon name="pencil" size={25} color={Colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="delete" size={25} color={Colors.red} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '12%',
              borderRadius: 11,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 7,
              backgroundColor: Colors.Iconwhite,
              marginVertical: 8,
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: Colors.black,
              }}>
              {event?.item?.qty}
            </Text>
          </View>
        </View>
      );
    } else {
      // If qty is not greater than zero, return null (render nothing)
      return null;
    }
  };

  const handleUpdateCheckoutItems = (updatedItems:any) => {
    // Update checkoutItems in parent component
    setCheckoutItems(updatedItems);

  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="arrow-left" size={30} color={Colors.black} onPress={()=> navigation.goBack()}/>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.black,
              marginLeft: 5,
            }}>
            Add Parts
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Icon
              name="plus-circle"
              size={30}
              color={Colors.primary}
              onPress={useCallback(() => {
                navigation.navigate('PartsStockList',{data:recordData,
                onUpdateCheckoutItems:handleUpdateCheckoutItems
                })
              }, [])}
            />
          </TouchableOpacity>
          <Menu>
            <MenuTrigger>
              <Icon name="dots-vertical" size={24} color={Colors.black} />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => handleMenuSelect('Vehicle Details')}>
                <Text style={styles.menuText}>Vehicle Details</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <ScrollView style={{marginHorizontal: 10, marginTop: 20}} showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.black}}>
          #{recordData?.service_number}
        </Text>
        <Text style={{fontSize: 18, fontWeight: '600', color: Colors.primary}}>
          {recordData?.vehicle}
        </Text>
        <FlatList
          data={checkoutItems}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          initialNumToRender={5} // Adjust numbers based on your list size and performance
          maxToRenderPerBatch={5}
          windowSize={5}
          style={{marginTop:10}}
          ListEmptyComponent={
            <Text style={styles.noDataText}>No data found.</Text>
          }
        />
      </ScrollView>
    </View>
  );
};

export default PartsListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  menuText: {
    padding: 10,
    fontSize: 16,
  },
  noDataText: {
    color: Colors.black,
    fontSize: 18,
    textAlign: 'center',
  },
});
