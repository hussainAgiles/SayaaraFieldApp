import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { RootStackParamList } from '../../navigation/Navigation';
import { Leadsstyles } from '../../styles/GlobalStyles';
import Header from '../Header/Header';

type CarPart = {
  id: number;
  part_name: string;
  part_number: string;
  manufacturer: string;
  price: number;
  stock_quantity: number;
  description: string;
  image: any; // Adjust this type based on how you import your images
  hs_code: string | number;
  inventory: string;
  qty: number;
};

type CheckoutItem = CarPart & { totalPrice: number };

interface PartsListProps {
  onCheckout: (items: CheckoutItem[]) => void;
}

const PartsStockList : React.FC<PartsListProps> = ({route}:any) => {
  const { data, onUpdateCheckoutItems } = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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

  const initialCarParts = [
    {
      id: 1,
      part_name: 'Engine Control Unit',
      part_number: 'ECU-12345',
      manufacturer: 'Bosch',
      price: 2500.0,
      stock_quantity: 10, // Out of stock
      description:
        "The Engine Control Unit (ECU) is a crucial component responsible for managing the engine's performance. This Bosch ECU ensures optimal engine functioning and efficiency.",
      image: require('../../assets/Images/PartsImages/ECU.jpeg'),
      hs_code: 85371090,
      inventory: 'Engine Inventory',
      qty: 0,
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
      inventory: 'Engine Inventory',
      qty: 0,
    },
    {
      id: 3,
      part_name: 'Brake Pad Set',
      part_number: 'BP-45678',
      manufacturer: 'Brembo',
      price: 1200.0,
      stock_quantity: 10, // Out of stock
      description:
        'The brake pad set by Brembo offers exceptional braking performance and durability. Designed to withstand high temperatures and provide consistent stopping power.',
      image: require('../../assets/Images/PartsImages/BrakePad.png'),
      hs_code: 87083090,
      inventory: 'Brake Parts Inventory',
      qty: 0,
    },
    {
      id: 4,
      part_name: 'Spark Plug',
      part_number: 'SP-11223',
      manufacturer: 'NGK',
      price: 550.0,
      stock_quantity: 0,
      description:
        'NGK Spark Plugs are engineered to deliver exceptional ignition performance in all conditions. Ensure smooth engine operation with these high-quality spark plugs.',
      image: require('../../assets/Images/PartsImages/Sparkplug.png'),
      hs_code: 85111000,
      inventory: 'Plugs Inventory',
      qty: 0,
    },
    {
      id: 5,
      part_name: 'Fuel Pump',
      part_number: 'FP-33445',
      manufacturer: 'Walbro',
      price: 8500.0,
      stock_quantity: 10, // Out of stock
      description:
        'The Walbro Fuel Pump delivers a consistent flow of fuel to the engine, ensuring optimal performance and fuel efficiency. Trusted by enthusiasts and professionals alike.',
      image: require('../../assets/Images/PartsImages/FuelPump.png'),
      hs_code: '8413.30.90',
      inventory: 'Fuel Inventory',
      qty: 0,
    },
    {
      id: 6,
      part_name: 'Oil Filter',
      part_number: 'OF-22334',
      manufacturer: 'Mann-Filter',
      price: 1000.0,
      stock_quantity: 30,
      description:
        'Mann-Filter Oil Filters provide superior filtration efficiency, protecting your engine from harmful contaminants. Maintain engine health and prolong its lifespan with these premium filters.',
      image: require('../../assets/Images/PartsImages/carFilter.png'),
      hs_code: 84212300,
      inventory: 'Radiator & Filter',
      qty: 0,
    },
    {
      id: 7,
      part_name: 'Air Filter',
      part_number: 'AF-66778',
      manufacturer: 'K&N',
      price: 2500.0,
      stock_quantity: 0,
      description:
        "K&N Air Filters are designed to increase horsepower and acceleration while providing excellent filtration. Enhance your engine's performance and protect it from harmful particles.",
      image: require('../../assets/Images/PartsImages/AirFilter.png'),
      hs_code: 84213100,
      inventory: 'Radiator & Filter',
      qty: 0,
    },
    {
      id: 8,
      part_name: 'Radiator',
      part_number: 'RAD-88990',
      manufacturer: 'Behr',
      price: 1500.0,
      stock_quantity: 10, // Out of stock
      description:
        'The Behr Radiator efficiently dissipates heat generated by the engine, ensuring optimal operating temperatures. Constructed with high-quality materials for durability and reliability.',
      image: require('../../assets/Images/PartsImages/Raditor.jpg'),
      hs_code: 87089100,
      inventory: 'Radiator & Filter',
      qty: 0,
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
      inventory: 'Fluids Inventory',
      qty: 0,
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
      inventory: 'Belt Inventory',
      qty: 0,
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [carParts, setCarParts] = useState<CarPart[]>(initialCarParts);
  const [showQuantity, setShowQuantity] = useState<{ [key: number]: boolean }>({});


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
              fontWeight: 'bold',
              color: Colors.black,
              paddingVertical: 5,
            }}>
            {/* QAR {partsData?.item.price * partsData?.item.qty} */}
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

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {partsData?.item.stock_quantity === 0 ? (<TouchableOpacity onPress={()=> handleRequestPart(partsData?.item.id)}
              style={{
                backgroundColor: Colors.red,
                paddingVertical: 7,
                paddingHorizontal: 15,
                borderRadius: 5,
              }}>
              <Text style={{color: Colors.Iconwhite}}>Request Part</Text>
            </TouchableOpacity>): partsData?.item.qty === 0 && !showQuantity[partsData?.item.id] ? (<TouchableOpacity onPress={()=>handleAdd(partsData?.item?.id)}
              style={{
                backgroundColor: Colors.primary,
                paddingVertical: 7,
                paddingHorizontal: 15,
                borderRadius: 5,
              }}>
              <Text style={{color: Colors.Iconwhite}}>Add</Text>
            </TouchableOpacity>) :(
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  width: 25,
                  borderWidth: 0.7,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.primary,
                }}
                onPress={() => handleDecrement(partsData?.item.id)}
                disabled={partsData?.item.qty === 0}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 20,
                    color: Colors.Iconwhite,
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center', fontSize: 20}}>
                  {partsData?.item.qty}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 25,
                  borderWidth: 0.7,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.primary,
                }}
                onPress={() => handleIncrement(partsData?.item.id)}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 20,
                    color: Colors.Iconwhite,
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>) }
          </View>
        </View>
      </View>
    );
  };

  const handleRequestPart = (id: number) => {
    console.log(`Requesting part with ID: ${id}`);
    // Implement the request part functionality here
  };

  const handleAdd = (id:any) => {
    setShowQuantity((prevState) => ({ ...prevState, [id]: true }));
    handleIncrement(id); // Initial increment when "Add" is pressed
  };

  const handleIncrement = (id: any) => {
    // console.log("Id increment",id)
    setCarParts(prevParts =>
      prevParts.map(part =>
        part.id === id
          ? {
              ...part,
              // stock_quantity: part.stock_quantity - 1,
              qty: part.qty + 1,
            }
          : part,
      ),
    );
  };

  const handleDecrement = (id: any) => {
    setCarParts(prevParts =>
      prevParts.map(part =>
        part.id === id && part.qty > 0
          ? {
              ...part,
              // stock_quantity: part.stock_quantity + 1,
              qty: part.qty > 0 ? part.qty - 1 : 0,
            }
          : part,
      ),
    );
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const filteredPartDetails = useMemo(() => {
    if (!searchQuery) {
      return carParts;
    }

    return carParts.filter((parts: any) => {
      const partNameMatches = parts?.part_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const manufacturerMatches = parts?.manufacturer
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return partNameMatches || manufacturerMatches;
    });
  }, [carParts, searchQuery]);

  const handleCheckoutClick = () => {
    const checkoutData = filteredPartDetails.map(item => ({
      id: item.id,
      qty: item.qty,
      price: item.price,
      item_name: item.part_name
    }));
    onUpdateCheckoutItems(checkoutData);
    navigation.navigate('PartsListing',{
      data:data
    })
  };

  // console.log(filteredPartDetails)

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
          marginTop: 10,
          borderWidth: 0.7,
          marginHorizontal: 15,
          borderRadius: 10,
        }}>
        <TextInput placeholder="Search..." onChangeText={handleSearch} />
        <Icon name="magnify" size={20} color={Colors.primary} />
      </View>
      <View style={{marginTop: 20, paddingHorizontal: 15, marginBottom: 160}}>
        <FlatList
          data={filteredPartDetails}
          renderItem={renderParts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          initialNumToRender={10} // Adjust numbers based on your list size and performance
          maxToRenderPerBatch={5}
          windowSize={5}
          ListEmptyComponent={
            <Text style={styles.noDataText}>No data found.</Text>
          }
        />
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckoutClick}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PartsStockList;

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
  noDataText: {
    color: Colors.black,
    fontSize: 18,
    textAlign: 'center',
  },
  checkoutButton:{
    backgroundColor:Colors.green,
    alignItems:'center',
    padding:12,
    borderRadius:10,
    
  },
  checkoutButtonText:{
    color:Colors.white
  }
});
