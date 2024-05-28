import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import Header from '../Header/Header'
import { FlatList } from 'react-native'

const CheckList = (route:any) => {
    const data = route?.route?.params.data
    // console.log("dtata == ",data)
        const [items, setItems] = useState([
          { id: 1, name: 'Flush the coolant', checked: false },
          { id: 2, name: 'Check the spark plugs', checked: false },
          { id: 3, name: 'Change air cabin filter', checked: false },
          { id: 4, name: 'Change engine air filter', checked: false },
          { id: 5, name: 'Lubricate doors and hinges', checked: false },
          { id: 6, name: 'Check brakes and wheel bearings', checked: false },
          { id: 7, name: 'Inspect steering and suspension', checked: false },
        ]);
      
        const checkItem = (id:any) => {
          const updatedItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
          );
          setItems(updatedItems);
        };
      
        const allChecked = items.every((item) => item.checked);
  return (
    <View style={styles.container}>
        <Header text="CheckList" icon_name="arrow-left"/>
        <ScrollView style={{marginHorizontal: 10, marginTop: 20}} showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.black}}>
          #{data?.service_number}
        </Text>
        <Text style={{fontSize: 18, fontWeight: '600', color: Colors.primary}}>
          {data?.vehicle}
        </Text>
        <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => checkItem(item.id)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ marginRight: 10 }}>{item.name}</Text>
              {item.checked && (
                <Text style={{ color: 'green' }}>Checked</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      {allChecked && <TouchableOpacity onPress={() => console.log("Submitted")}>
        <Text>Submit</Text>
      </TouchableOpacity>}
      </ScrollView>
    </View>
  )
}

export default CheckList;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.lightBg,
    }
})