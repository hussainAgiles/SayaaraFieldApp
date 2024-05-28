import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import Header from '../Header/Header';
import {FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckList = (route: any) => {
  const data = route?.route?.params.data;
  const [headerCheckboxSelected, setHeaderCheckboxSelected] = useState(false);
  // const [selectedCheckbox, setSelectedCheckbox] = useState(false);

  // console.log("dtata == ",data)
  const [items, setItems] = useState([
    {id: 1, name: 'Flush the coolant', checked: false},
    {id: 2, name: 'Check the spark plugs', checked: false},
    {id: 3, name: 'Change air cabin filter', checked: false},
    {id: 4, name: 'Change engine air filter', checked: false},
    {id: 5, name: 'Lubricate doors and hinges', checked: false},
    {id: 6, name: 'Check brakes and wheel bearings', checked: false},
    {id: 7, name: 'Inspect steering and suspension', checked: false},
  ]);

  const checkItem = (id: any) => {
    const updatedItems = items.map(item =>
      item.id === id ? {...item, checked: !item.checked} : item,
    );
    setItems(updatedItems);
    setHeaderCheckboxSelected(updatedItems.every(item => item.checked));
  };

  const handleHeaderCheckBoxChange = () => {
    const newSelection = !headerCheckboxSelected;
    const updatedItems = items.map(item => ({...item, checked: newSelection}));
    setItems(updatedItems);
    setHeaderCheckboxSelected(newSelection);
  };

  const handleCheckBoxChange = (id: any) => {
    const updatedItems = items.map(item =>
      item.id === id ? {...item, checked: !item.checked} : item,
    );
    setItems(updatedItems);
    setHeaderCheckboxSelected(updatedItems.every(item => item.checked));
  };

  const allChecked = items.every(item => item.checked);
  return (
    <View style={styles.container}>
      <Header text="CheckList" icon_name="arrow-left" />
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        {/* <View
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.Iconwhite,
            justifyContent: 'space-around',
            height: '25%',
            alignItems: 'center',
            elevation: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}>
          <Image
            source={require('../../assets/Images/Default_Car.png')}
            style={{width: 150, height: 80}}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{}}>{data?.service_number}</Text>
            <Text>{data?.vehicle}</Text>
          </View>
        </View> */}
        {/* <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.black}}>
          #{data?.service_number}
        </Text> */}
        <Text style={{fontSize: 18, fontWeight: '600', color: Colors.black}}>
          {data?.vehicle}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: Colors.primary,
            padding: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.Iconwhite,
              width: '20%',
            }}>
            Sl No
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: Colors.Iconwhite,
              width: '50%',
              textAlign: 'left',
            }}>
            CheckList
          </Text>
          <CheckBox
            value={headerCheckboxSelected}
            onValueChange={handleHeaderCheckBoxChange}
            style={[styles.checkbox]}
            tintColors={{true : Colors.black ,false:Colors.white}}
            // onFillColor={{true : Colors.black ,false:Colors.white}}
           />
        </View>
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => checkItem(item.id)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 6,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    alignItems: 'center',
                    width: '10%',
                    textAlign: 'center',
                    color: Colors.black,
                  }}>
                  {item.id}
                </Text>
                <Text
                  style={{
                    marginRight: 10,
                    width: '50%',
                    color: Colors.black,
                    fontSize: 16,
                  }}>
                  {item.name}
                </Text>
                <CheckBox
                  value={item.checked}
                  onValueChange={() => handleCheckBoxChange(item.id)}
                  style={styles.checkbox}
                  onFillColor={Colors.Iconwhite}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        {allChecked && (
          <TouchableOpacity
            onPress={() => console.log('Submitted')}
            style={{
              width: 100,
              marginTop: 50,
              justifyContent: 'flex-end',
              backgroundColor: Colors.primary,
              alignItems: 'center',
              padding: 6,
              borderRadius: 10,
            }}>
            <Text style={{color: Colors.Iconwhite}}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CheckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'flex-end',
    width: '13%',
  },
  label: {
    margin: 8,
  },
});
