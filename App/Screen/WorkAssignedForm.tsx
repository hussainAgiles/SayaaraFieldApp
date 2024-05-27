import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';
import {Platform} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Header from '../components/Header/Header';
import {Leadsstyles, GlobalStyles} from '../styles/GlobalStyles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigation';
import {useNavigation} from '@react-navigation/native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

interface records {
  serviceId: number;
  workType: string;
  description: string;
  imagePath: string;
  status: string;
}

const WorkAssignedForm = ({route}: any) => {
  const data = route?.params?.record?.item;

  // const {onUpdateItems} = route?.params?.onUpdateItems;

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [description, setDescription] = useState(data?.description);
  const [selectedWork, setSelectedWork] = useState(data?.workType);
  const [images, setImages] = useState([]);
  const [clockStatus, setClockStatus] = useState('');
  const [transfered,setTransfered] = useState('');
  const {mode,id} = route.params;

  const workAssigned = [
    {
      id: 1,
      label: 'Diagnostics and Repairs',
      value: 'Diagnostics and Repairs',
    },
    {
      id: 2,
      label: 'Tire Services',
      value: 'Tire Services',
    },
    {
      id: 3,
      label: 'Brake Services',
      value: 'Brake Services',
    },
    {
      id: 4,
      label: 'Air Conditioning and Heating Services',
      value: 'Air Conditioning and Heating Services',
    },
    {
      id: 5,
      label: 'Oil changes',
      value: 'Oil changes',
    },
    {
      id: 6,
      label: 'Fluid level checks and top-offs',
      value: 'Fluid level checks and top-offs',
    },
    {
      id: 7,
      label: 'Battery testing and replacement',
      value: 'Battery testing and replacement',
    },
  ];

  useEffect(() => {
    if (mode === 'edit' && id) {
      setSelectedWork(id.workType);
      setDescription(id.description);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const newRecord = {
        serviceId: data?.service_number,
        id:uuid.v4(),
        workType: selectedWork,
        description: description,
        imagePath: images.map((image) => image?.path),
        status: clockStatus === '' ? 'Clock In' : 'Clock Out',
      };
      
      let records = await AsyncStorage.getItem('workRecords');
      console.log("this is the recorss",records)
  
      if (!records) {
        records = [newRecord]; // Wrap newRecord in an array if records is null
      } else {
        records = JSON.parse(records);
  
        if (mode === 'edit') {
          // If editing, find the record by id and update it
          const index = records.findIndex((record:any) => record.id === id.id);
          if (index !== -1) {
            records[index] = newRecord;
          } else {
            console.error('Record with id not found:', id);
            return; // Exit function if record with id is not found
          }
        } else {
          // If not editing, simply push the new record
          records.push(newRecord);
        }
      }
      onUpdateItems(newRecord)
      // Save the updated records back to AsyncStorage
      await AsyncStorage.setItem('workRecords', JSON.stringify(records));
  
      // Display success message and navigate back
      Toast.show({ type: 'success', text1: 'Record saved successfully' });
      navigation.goBack();
    } catch (error) {
      console.error('Error saving record', error);
      Toast.show({ type: 'error', text1: 'An error occurred' });
    }
  };
  

  const selectImage = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    // Common alert for both Android and iOS
    Alert.alert(
      'Select Image',
      'Choose an option',
      [
        {
          text: 'Take Photo',
          onPress: () => {
            ImageCropPicker.openCamera({
              mediaType: 'photo',
              cropping: true, // Enable cropping
              //   includeBase64: true,
              compressImageQuality: 0.5,
            })
              .then(image => {
                if (image?.path) {
                  setImages([image?.path]);
                } else {
                  console.log('No image found');
                }
              })
              .catch(e => {
                if (e.code !== 'E_PICKER_CANCELLED') {
                  Alert.alert('Error', 'Taking photo was cancelled.');
                }
              });
          },
        },
        {
          text: 'Choose from Gallery',
          onPress: () => {
            ImageCropPicker.openPicker({
              mediaType: 'photo',
              cropping: true,
              //   includeBase64: true, // Enable cropping
              compressImageQuality: 0.5,
              multiple: true,
            })
              .then(image => {
                // console.log('image', image);
                if (Array.isArray(image)) {
                  // If multiple images are selected
                  let arrayImages = [];
                  for (let i = 0; i < image.length; i++) {
                    let imagedata = {
                      path: image[i].path,
                    };
                    arrayImages.push(imagedata);
                  }
                  setImages(arrayImages);
                } else {
                  // If a single image is selected
                  setImages([image?.path]);
                }
              })
              .catch(e => {
                if (e.code !== 'E_PICKER_CANCELLED') {
                  Alert.alert('Error', 'Image selection was cancelled.');
                }
              });
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const handleMenuSelect = (value: any) => {
    switch (value) {
      case 'Vehicle Details':
        navigation.navigate('VehicleDetails');
        break;
      default:
        break;
    }
  };

  const clear = () => {
    AsyncStorage.removeItem('workRecords');
    // setExistingRecordId('');
  };

  const handleGoingBack = () => {
    setDescription('');
    setSelectedWork('');
    setImages([]);
    navigation.goBack();
  };

  const handleTransferGarage = (status:any) =>{
    setTransfered(status);
  }


  return (
    <View style={Leadsstyles.container}>
      <View style={styles.Container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={handleGoingBack}>
            <Icon name={'arrow-left'} color={Colors.black} size={28} />
          </TouchableOpacity>
          <Text style={styles.Heading}>Work Assigned</Text>
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
            style={{paddingHorizontal: 5}}
          />
          <Icon
            name="camera"
            size={25}
            color={Colors.black}
            onPress={selectImage}
            style={{paddingHorizontal: 5}}
          />
          <Menu style={{marginRight: 10}}>
            <MenuTrigger>
              <Icon name="dots-vertical" size={24} color={Colors.black} />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => handleMenuSelect('documents')}>
                <Text style={GlobalStyles.menuText}>Vehicle Details</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <ScrollView contentContainerStyle={[Leadsstyles.container]}>
        <View style={{padding: 15}}>
          <Dropdown
            data={workAssigned}
            searchPlaceholder="Search ex: Repairs"
            search
            style={styles.dropdown}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder="Select Work type"
            value={selectedWork}
            onChange={item => setSelectedWork(item.value)}
          />
          <TextInput
            style={[styles.dropdown, {height: 150}]}
            placeholder="Enter Observation"
            value={description}
            multiline
            onChangeText={text => setDescription(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.text}>
                {clockStatus === '' ? 'Clock In' : 'Clock Out'}
              </Text>
              <Icon name="timer-sand-complete" size={35} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTransferGarage('transfered')} style={styles.button}>
              <Text style={[styles.text, {width: 80}]}>Transfer To Garage</Text>
              <Icon name="garage" size={35} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              {images?.map((image, index) => (
                <Image
                  key={index}
                  source={{uri: image?.path}}
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: 20,
                    marginTop: 20,
                  }}
                />
              ))}
            </View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WorkAssignedForm;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.lightBg,
    paddingVertical: 15,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  dropdown: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 10,
    marginVertical: 7,
    borderWidth: 0.2,
    borderColor: Colors.black,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    width: 160,
    justifyContent: 'space-around',
  },
  text: {
    color: Colors.Iconwhite,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
