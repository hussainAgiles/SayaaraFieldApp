import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Leadsstyles} from '../../styles/GlobalStyles';
import Header from '../Header/Header';
import {Dropdown} from 'react-native-element-dropdown';
import Colors from '../../constants/Colors';

const PartsList = () => {
  const partsCategory = [
    {id: 1, category: 'Alignment and Balancing'},
    {id: 2, category: 'Ceramic Coating'},
    {id: 3, category: 'Car Renewal System'},
    {id: 4, category: 'Braking System'},
    {id: 5, category: 'Electrical System'},
    {id: 6, category: 'Exterior Body Parts'},
    {id: 7, category: 'Interior Components'},
    {id: 8, category: 'Wheels and Tires'},
  ];

  const cartType = [
    {id: 1, car_name: 'Toyota', variant: 'Camry', car_number: 'ABC1234'},
    {id: 2, car_name: 'Honda', variant: 'Civic', car_number: 'DEF5678'},
    {id: 3, car_name: 'BMW', variant: '3 Series', car_number: 'GHI9012'},
    {id: 4, car_name: 'Ford', variant: 'F-150', car_number: 'JKL3456'},
    {id: 5, car_name: 'Chevrolet', variant: 'Silverado', car_number: 'MNO7890'},
    {
      id: 6,
      car_name: 'Mercedes-Benz',
      variant: 'E-Class',
      car_number: 'PQR1234',
    },
    {id: 7, car_name: 'Audi', variant: 'A4', car_number: 'STU5678'},
    {id: 8, car_name: 'Nissan', variant: 'Altima', car_number: 'VWX9012'},
    {id: 9, car_name: 'Volkswagen', variant: 'Jetta', car_number: 'YZA3456'},
    {id: 10, car_name: 'Hyundai', variant: 'Elantra', car_number: 'BCD7890'},
  ];

  const carParts = [
    {
      id: 1,
      part_name: 'Engine Control Unit',
      part_number: 'ECU-12345',
      manufacturer: 'Bosch',
      price: 2500.0,
      stock_quantity: 0, // Out of stock
      description:
        "The Engine Control Unit (ECU) is a crucial component responsible for managing the engine's performance. This Bosch ECU ensures optimal engine functioning and efficiency.",
      image: require('../../assets/Images/PartsImages/ECU.jpeg'),
      hs_code: 85371090,
      inventory:'Engine Inventory'
    },
    {
      id: 2,
      part_name: 'Alternator',
      part_number: 'ALT-98765',
      manufacturer: 'Denso',
      price: 25000.0,
      stock_quantity: 25,
      description:
        'The alternator plays a vital role in charging the battery and providing power to the electrical system. This Denso alternator is known for its reliability and consistent performance.',
      image: require('../../assets/Images/PartsImages/Alterntor.jpg'),
      hs_code: 85115000,
      inventory:'Engine Inventory'
    },
    {
      id: 3,
      part_name: 'Brake Pad Set',
      part_number: 'BP-45678',
      manufacturer: 'Brembo',
      price: 1200.0,
      stock_quantity: 0, // Out of stock
      description:
        'The brake pad set by Brembo offers exceptional braking performance and durability. Designed to withstand high temperatures and provide consistent stopping power.',
      image: require('../../assets/Images/PartsImages/BrakePad.png'),
      hs_code: 87083090,
      inventory:'Brake Parts Inventory'

    },
    {
      id: 4,
      part_name: 'Spark Plug',
      part_number: 'SP-11223',
      manufacturer: 'NGK',
      price: 550.0,
      stock_quantity: 150,
      description:
        'NGK Spark Plugs are engineered to deliver exceptional ignition performance in all conditions. Ensure smooth engine operation with these high-quality spark plugs.',
      image: require('../../assets/Images/PartsImages/Sparkplug.png'),
      hs_code: 85111000,
      inventory:'Plugs Inventory'
    },
    {
      id: 5,
      part_name: 'Fuel Pump',
      part_number: 'FP-33445',
      manufacturer: 'Walbro',
      price: 8500.0,
      stock_quantity: 0, // Out of stock
      description:
        'The Walbro Fuel Pump delivers a consistent flow of fuel to the engine, ensuring optimal performance and fuel efficiency. Trusted by enthusiasts and professionals alike.',
      image: require('../../assets/Images/PartsImages/FuelPump.png'),
      hs_code: '8413.30.90',
      inventory:'Fuel Inventory'
    },
    {
      id: 6,
      part_name: 'Oil Filter',
      part_number: 'OF-22334',
      manufacturer: 'Mann-Filter',
      price: 1000.0,
      stock_quantity: 80,
      description:
        'Mann-Filter Oil Filters provide superior filtration efficiency, protecting your engine from harmful contaminants. Maintain engine health and prolong its lifespan with these premium filters.',
      image: require('../../assets/Images/PartsImages/carFilter.png'),
      hs_code: 84212300,
      inventory:'Radiator & Filter'
    },
    {
      id: 7,
      part_name: 'Air Filter',
      part_number: 'AF-66778',
      manufacturer: 'K&N',
      price: 2500.0,
      stock_quantity: 60,
      description:
        "K&N Air Filters are designed to increase horsepower and acceleration while providing excellent filtration. Enhance your engine's performance and protect it from harmful particles.",
      image: require('../../assets/Images/PartsImages/AirFilter.png'),
      hs_code: 84213100,
      inventory:'Radiator & Filter'
    },
    {
      id: 8,
      part_name: 'Radiator',
      part_number: 'RAD-88990',
      manufacturer: 'Behr',
      price: 1500.0,
      stock_quantity: 0, // Out of stock
      description:
        'The Behr Radiator efficiently dissipates heat generated by the engine, ensuring optimal operating temperatures. Constructed with high-quality materials for durability and reliability.',
      image: require('../../assets/Images/PartsImages/Raditor.jpg'),
      hs_code: 87089100,
      inventory:'Radiator & Filter'
    },
    {
      id: 9,
      part_name: 'Transmission Fluid',
      part_number: 'TF-33456',
      manufacturer: 'Valvoline',
      price: 12000.0,
      stock_quantity: 45,
      description:
        'Valvoline Transmission Fluid is formulated to provide smooth shifting and reliable performance in automatic transmissions. Protect your transmission with this high-quality fluid.',
      image: require('../../assets/Images/PartsImages/Transmision.png'),
      hs_code: 38190000,
      inventory:'Fluids Inventory'
    },
    {
      id: 10,
      part_name: 'Timing Belt',
      part_number: 'TB-99887',
      manufacturer: 'Gates',
      price: 950.0,
      stock_quantity: 30,
      description:
        'The Gates Timing Belt ensures precise synchronization of engine components, preventing costly damage from timing belt failure. Trust Gates for reliable timing belt solutions.',
      image: require('../../assets/Images/PartsImages/timing.png'),
      hs_code: 87089990,
      inventory:'Belt Inventory'
    },
  ];
  

  const [selectedCar, setSelectedCar] = useState('Toyota');
  const [focusedCategory, setFocusedCategory] = useState(null);
  const [value,setValue] = useState(0);
  const [disable,setDisable] = useState(false)

  const handleCategoryPress = (categoryId: any) => {
    setFocusedCategory(categoryId);
  };

  const renderItem = (data: any) => {
    const isFocused = focusedCategory === data?.item?.id;
    return (
      <TouchableOpacity onPress={() => handleCategoryPress(data?.item?.id)}>
        <View
          style={[
            styles.categoryItem,
            isFocused && styles.focusedCategoryItem,
            {borderWidth: isFocused == true ? 1 : 0.5},
          ]}>
          <Text style={{fontWeight: '600'}}>{data?.item?.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  const renderParts = (partsData: any) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginVertical: 10,
          backgroundColor: Colors.white,
          padding: 15,
          borderRadius: 20,
          elevation: 5,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: Colors.black,
              }}>
              {partsData?.item.part_name}
            </Text>
            <Text style={{fontSize: 16, paddingVertical: 5}}>
              {partsData?.item.manufacturer}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: Colors.black,
              paddingVertical: 5,
            }}>
            QAR {partsData?.item.price}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: Colors.black,
              }}>
              Part No : {partsData?.item.part_number}
            </Text>
            <Text style={{fontSize: 16, paddingVertical: 5}}>
              Qty Available: {partsData?.item.stock_quantity}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: Colors.black,
              paddingVertical: 5,
            }}>
            HS Code :{partsData?.item.hs_code}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: Colors.black,
              }}>
              Inventory : {partsData?.item.inventory}
            </Text>

            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{width:25,borderWidth:0.7,height:30,alignItems:'center',justifyContent:'center',backgroundColor:Colors.primary}}
                 onPress={(index)=>handleIncrement(index)}>
                    <Text style={{textAlign:'center',alignItems:'center',fontSize:20,color:Colors.Iconwhite}}>+</Text>
                </TouchableOpacity>
                <View style={{width:30,height:30,alignItems:'center',justifyContent:'center'}}>
                <Text style={{textAlign:'center',fontSize:20}}>{value}</Text>
                </View>
                <TouchableOpacity style={{width:25,borderWidth:0.7,height:30,alignItems:'center',justifyContent:'center',backgroundColor:Colors.primary}} onPress={()=>{
                    const decrement = value - 1;
                        setValue(decrement)           
                }}>
                    <Text style={{textAlign:'center',alignItems:'center',fontSize:20,color:Colors.Iconwhite}}>-</Text>
                </TouchableOpacity>
            </View>
        </View>

      </View>
    );
  };

  const handleIncrement = (index:any) =>{
    const temp = renderParts
    const incremented = value + 1;
    setValue(incremented)
  }

  return (
    <View style={Leadsstyles.container}>
      <Header text="Parts Categories" icon_name="arrow-left" />
      {/* Dropdaown with car image */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Dropdown
          data={cartType}
          searchPlaceholder="Search ex: Supra"
          search
          style={styles.dropdown}
          maxHeight={200}
          labelField="car_number"
          valueField="car_name"
          placeholder="Select Car"
          value={selectedCar}
          onChange={item => setSelectedCar(item.value)}
        />
      </View>
      {/* <View style={{marginTop: 20, paddingHorizontal: 10}}>
        <FlatList
          data={partsCategory}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View> */}
      <View style={{marginTop: 20, paddingHorizontal: 15}}>
        <FlatList
          data={carParts}
          renderItem={renderParts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  );
};

export default PartsList;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 10,
    marginVertical: 7,
    borderWidth: 0.2,
    borderColor: Colors.black,
    width: '60%',
    height: 45,
  },
  image: {
    width: 120,
    height: 100,
  },
  categoryItem: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  focusedCategoryItem: {
    borderColor: Colors.red, // Change to your desired focused color
  },
});
