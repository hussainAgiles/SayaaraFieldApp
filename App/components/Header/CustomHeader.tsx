import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

const CustomHeader = ({text, header}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image source={require('../../assets/Images/person.jpg')} style={styles.image} />
      </TouchableOpacity>
      <View style={{flexDirection:'column'}}>
      <Text style={styles.Heading}>{header}</Text>
      <Text style={styles.subHeading}>{text}</Text>
      </View>
    </View>

  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin:10
    
  },
  Heading: {
    fontSize: 20,
    marginLeft: 10,
    color: Colors.Iconwhite,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subHeading: {
    fontSize: 20,
    color: Colors.white,
    marginLeft:10,
    fontWeight: '400',
    textAlign: 'center',
  },
  image:{
    height:50,
    width:50,
    borderRadius:25
  }
});
