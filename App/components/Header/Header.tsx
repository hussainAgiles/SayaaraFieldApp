import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({text,icon_name}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={icon_name} color={Colors.black} size={28} />
      </TouchableOpacity>
      <Text style={styles.Heading}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.Iconwhite,
    paddingVertical:15,
    paddingHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  Heading:{
    fontSize:20,
    marginLeft:10,
    color:Colors.black,
    fontWeight:'bold',
    fontFamily:'Poppins-ExtraBold',
    textAlign:'left'
  }
});
