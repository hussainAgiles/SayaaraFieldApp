import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header/Header';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../navigation/Navigation';
import { Leadsstyles, inventoryStyles } from '../styles/GlobalStyles';

type CarPart = {
  id: number;
  part_name: string;
  part_number: string;
  manufacturer: string;
  price: number;
  stock_quantity: number;
  description: string;
  hs_code: string | number;
  inventory: string;
  qty: number;
};

type CheckoutItem = CarPart & { totalPrice: number };

interface PartsListProps {
  onCheckout: (items: CheckoutItem[]) => void;
}

const Inventory: React.FC<PartsListProps> = ({ route }: any) => {

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
      // image: require('../../assets/Images/PartsImages/ECU.jpeg'),
      hs_code: 85371090,
      inventory: 'Engine Inventory',
      qty: 0,
      part_code:'ECU-345'
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
      // image: require('../../assets/Images/PartsImages/Alterntor.jpg'),
      hs_code: 85115000,
      inventory: 'Engine Inventory',
      qty: 0,
      part_code:'ALT-765'
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
      // image: require('../../assets/Images/PartsImages/BrakePad.png'),
      hs_code: 87083090,
      inventory: 'Brake Parts Inventory',
      qty: 0,
      part_code:'BPD-678'
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
      // image: require('../../assets/Images/PartsImages/Sparkplug.png'),
      hs_code: 85111000,
      inventory: 'Plugs Inventory',
      qty: 0,
      part_code:'SP-223'
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
      // image: require('../../assets/Images/PartsImages/FuelPump.png'),
      hs_code: '8413.30.90',
      inventory: 'Fuel Inventory',
      qty: 0,
      part_code:'FPM-445'
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
      // image: require('../../assets/Images/PartsImages/carFilter.png'),
      hs_code: 84212300,
      inventory: 'Radiator & Filter',
      qty: 0,
      part_code:'OLF-334'
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
      // image: require('../../assets/Images/PartsImages/AirFilter.png'),
      hs_code: 84213100,
      inventory: 'Radiator & Filter',
      qty: 0,
      part_code:'ARF-778'
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
      // image: require('../../assets/Images/PartsImages/Raditor.jpg'),
      hs_code: 87089100,
      inventory: 'Radiator & Filter',
      qty: 0,
      part_code:'RDR-990'
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
      // image: require('../../assets/Images/PartsImages/Transmision.png'),
      hs_code: 38190000,
      inventory: 'Fluids Inventory',
      qty: 0,
      part_code:'TRF-456'
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
      // image: require('../../assets/Images/PartsImages/timing.png'),
      hs_code: 87089990,
      inventory: 'Belt Inventory',
      qty: 0,
      part_code:'TBT-887'
    },
  ];


  const [searchQuery, setSearchQuery] = useState('');

  const renderParts = (partsData: any) => {
    return (
      <View style={inventoryStyles.partContainer}>
        <View style={inventoryStyles.partHeader}>
          <View style={inventoryStyles.partHeaderTextContainer}>
            <Text style={inventoryStyles.partName}>{partsData?.item.part_name}</Text>
            <Text style={inventoryStyles.partNumber}>Part No : {partsData?.item.part_number}</Text>
          </View>
          <Text style={inventoryStyles.price}>QAR {partsData?.item.price}</Text>
        </View>
        <View style={inventoryStyles.partDetails}>
          <View style={inventoryStyles.partDetailsTextContainer}>
          <Text style={inventoryStyles.manufacturer}>{partsData?.item.manufacturer}</Text>
          <Text style={inventoryStyles.inventoryText}>Inventory : {partsData?.item.inventory}</Text>
          </View>
          <Text style={inventoryStyles.hsCode}>HS Code : {partsData?.item.hs_code}</Text>
        </View>
        <View style={inventoryStyles.inventoryContainer}>
        <Text style={inventoryStyles.stockQuantity}>Qty Available: {partsData?.item.stock_quantity}</Text>
        <Text style={{fontSize: 16, paddingVertical: 5}}>
             Part code: {partsData?.item?.part_code}
        </Text>
        </View>
      </View>
    );
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const filteredPartDetails = useMemo(() => {
    if (!searchQuery) {
      return initialCarParts;
    }

    return initialCarParts.filter((parts: any) => {
      const partNameMatches = parts?.part_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const manufacturerMatches = parts?.manufacturer
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return partNameMatches || manufacturerMatches;
    });
  }, [initialCarParts, searchQuery]);

  return ( 
    <View style={Leadsstyles.container}>
      <Header text="Inventory" />
      <View style={inventoryStyles.searchContainer}>
        <TextInput
          placeholder="Search..."
          onChangeText={handleSearch}
          style={inventoryStyles.searchInput}
        />
        <Icon name="magnify" size={20} color={Colors.primary} />
      </View>
      <View style={inventoryStyles.listContainer}>
        <FlatList
          data={filteredPartDetails}
          renderItem={renderParts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          initialNumToRender={10} // Adjust numbers based on your list size and performance
          maxToRenderPerBatch={5}
          windowSize={5}
          ListEmptyComponent={
            <Text style={inventoryStyles.noDataText}>No data found.</Text>
          }
        />
      </View>
    </View>
  );
};

export default Inventory;


