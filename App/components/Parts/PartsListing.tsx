import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { RootStackParamList } from '../../navigation/Navigation';
import { inventoryStyles } from '../../styles/GlobalStyles';
import Toast from 'react-native-toast-message';

const PartsListing = (data: any) => {
  const recordData = data?.route?.params?.data;
  const [checkoutItems, setCheckoutItems] = useState([]);

  // console.log('Recorded Data = ', checkoutItems);
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

  const handleDeleteParts = (id:any) =>{
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
              const updatedPartsList = checkoutItems.filter(record => record?.id !== id);
              setCheckoutItems(updatedPartsList);
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
  }

  const renderItem = (event: any) => {
    if (event?.item?.qty > 0) {
      return (
        <View style={inventoryStyles.partContainer}>
          <View style={inventoryStyles.partHeader}>
            <View style={inventoryStyles.partHeaderTextContainer}>
              <Text style={inventoryStyles.partName}>
                {event?.item?.item_name}
              </Text>
              <Text style={inventoryStyles.partNumber}>
                Part No : {event?.item?.partnumber}
              </Text>
            </View>
            <Text style={inventoryStyles.price}>
              QAR {event?.item?.price * event?.item?.qty}
            </Text>
          </View>
          <View style={inventoryStyles.partDetails}>
            <View style={inventoryStyles.partDetailsTextContainer}>
              <Text style={{fontSize: 17, paddingVertical: 3}}>
                Short code: {event?.item?.short_code}
              </Text>
              <Text style={inventoryStyles.manufacturer}>
                {event?.item?.manufacturer}
              </Text>
              <Text style={inventoryStyles.inventoryText}>
                Inventory : {event?.item?.inventory}
              </Text>
            </View>
            <View style={inventoryStyles.inventoryContainer}>
              <Text
                style={{
                  backgroundColor: Colors.lightGreish,
                  padding: 5,
                  color: Colors.white,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {' '}
                Qty Available
              </Text>
              <Text style={inventoryStyles.stockQuantity}>
                {event?.item?.qty}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row',justifyContent:'space-around',alignItems:'center'}}>
              <TouchableOpacity style={[inventoryStyles.button,{backgroundColor:Colors.primary}]}>
                <Text style={{color:Colors.white,fontSize:16,fontWeight:'bold'}}>Edit</Text>
                {/* <Icon name="pencil" size={25} color={Colors.primary} /> */}
              </TouchableOpacity>
              <TouchableOpacity style={[inventoryStyles.button,{backgroundColor:Colors.red}]}>
              <Text style={{color:Colors.white,fontSize:16,fontWeight:'bold'}} onPress={()=>handleDeleteParts(event?.item?.id)}>Delete</Text>
                {/* <Icon name="delete" size={25} color={Colors.red} /> */}
              </TouchableOpacity>
            </View>
        </View>
      );
    } else {
      // If qty is not greater than zero, return null (render nothing)
      return null;
    }
  };

  const handleUpdateCheckoutItems = (updatedItems: any) => {
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
          <Icon
            name="arrow-left"
            size={30}
            color={Colors.black}
            onPress={() => navigation.goBack()}
          />
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
                navigation.navigate('PartsStockList', {
                  data: recordData,
                  onUpdateCheckoutItems: handleUpdateCheckoutItems,
                });
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
      <ScrollView
        style={{marginHorizontal: 10, marginTop: 20}}
        showsVerticalScrollIndicator={false}>
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
          style={{marginTop: 10}}
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
