import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";


export const GlobalStyles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Iconwhite,
    },
    loader: {
        width: 250,
        height: 200,
    },
    menuText: {
      padding: 10,
      fontSize: 16,
    },
})

export const Leadsstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3F3',
    },
    searchInputContainer: {
      marginHorizontal: 25,
      borderWidth: 0.3,
      borderColor: Colors.lightGreish,
      marginTop: 10,
      marginHorizontal: 28,
      borderRadius: 10,
      backgroundColor: Colors.Iconwhite,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    scrollViewContent: {
      paddingBottom: 70,
      backgroundColor: '#F3F3F3',
    },
    listContainer: {
      margin: 25,
    },
    itemContainer: {
      flex: 1,
      elevation: 3,
      marginHorizontal: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 2,
      backgroundColor: '#FEFFFE',
      paddingVertical: 20,
      borderRadius: 5,
      marginBottom: 20,
    },
    itemHeader: {
      flexDirection: 'row',
      borderBottomWidth: 0.8,
      borderBottomColor: '#E0E0E1',
      paddingBottom: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    itemInfo: {
      flexDirection: 'column',
      flex: 1.5,
      marginLeft: 10,
    },
    itemName: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: 20,
    },
    itemDetail: {
      color: Colors.lightGreish,
      fontSize: 15,
      marginTop:5
    },
    itemActions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 10,
    },
    itemAction: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    itemActionText: {
      color: Colors.lightGreish,
      fontSize: 16,
      fontWeight: '400',
    },
    itemActionDivider: {
      borderWidth: 0.2,
    },
    emptyData: {
      color: Colors.black,
      fontSize: 18,
      textAlign: 'center',
    },
  });

export const calendarStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.Iconwhite
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:Colors.black
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 20,
    justifyContent:'space-around'
  },

});


export const customerVoiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBg,
  },
  Container: {
    backgroundColor: Colors.lightBg,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 20,
    marginLeft: 10,
    color: Colors.black,
    fontWeight: 'bold',
    fontFamily: 'Poppins-ExtraBold',
    textAlign: 'left',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPadding: {
    paddingHorizontal: 3,
  },
  menuText: {
    padding: 10,
    fontSize: 16,
  },
  scrollViewContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    paddingBottom: 100,
  },
  sectionContainer: {
    flexDirection: 'column',
  },
  sectionHeader: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionHeaderText: {
    color: Colors.Iconwhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  customerDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  customerTextContainer: {
    flexDirection: 'column',
  },
  customerNameText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: Colors.black,
    fontWeight: '500',
    marginLeft: 5,
  },
  dateTimeContainer: {
    flexDirection: 'row',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },
  dateTimeText: {
    color: Colors.black,
    fontWeight: '500',
    marginLeft: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    marginLeft: 25,
  },
  serviceStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceButton: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 25,
  },
  serviceButtonText: {
    color: Colors.Iconwhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  statusButton: {
    backgroundColor: Colors.green,
    padding: 12,
    borderRadius: 25,
    width: 120,
  },
  statusButtonText: {
    color: Colors.Iconwhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  vehicleDetailsContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  vehicleDetailsHeader: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  vehicleDetailsHeaderText: {
    color: Colors.Iconwhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  vehicleInfoContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  vehicleImage: {
    height: 80,
    width: 80,
  },
  vehicleNameText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  registrationVinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registrationContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  registrationText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
  vinContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  vinText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
  lastServiceContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  lastServiceDetails: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  lastServiceText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
  lastVisitDetails: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    marginLeft: '36%',
  },
  lastVisitText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '500',
  },
  workAllotmentHeader: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  workAllotmentHeaderText: {
    color: Colors.Iconwhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: Colors.Iconwhite,
  },
  itemInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    paddingBottom: 150,
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  ProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileDetails: {
    flexDirection: 'row',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  NameText: {
    color: Colors.Iconwhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
  roleText: {
    color: Colors.Iconwhite,
    fontSize: 12,
    fontWeight: '600',
  },
  profileImageContainer: {
    height: 50,
    width: 50,
    backgroundColor: Colors.Iconwhite,
    borderRadius: 25,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  contentContainer: {
    padding: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  boxWrapper: {
    flex: 1,
  },
  box: {
    backgroundColor: Colors.Iconwhite,
    padding: 15,
    margin: 5,
    elevation: 4,
    borderWidth: 0.8,
    borderColor: Colors.lightGrey,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 25,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  boxLabel: {
    fontSize: 14,
    color: Colors.lightGreish,
    textAlign: 'center',
    fontWeight: '500',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  HeaderText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '600',
  },
  viewAllText: {
    color: Colors.black,
    fontSize: 14,
  },
  assignmentList: {
    marginTop: 20,
  },
  assignmentItem: {
    flexDirection: 'column',
    backgroundColor: Colors.Iconwhite,
    marginHorizontal: 18,
    marginBottom: 20,
    borderRadius: 5,
  },
  dateTime: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  dateText: {
    color: Colors.white,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  customerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  status: {
    fontWeight: "400",
    backgroundColor: Colors.primary,
    padding: 7,
    color: Colors.Iconwhite,
    borderRadius: 15,
  },
  noDataText: {
    color: Colors.black,
    fontSize: 18,
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center'
  },
});


export const inventoryStyles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 0.7,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
  },
  listContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
    marginBottom: 200,
  },
  partContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 20,
    elevation: 5,
  },
  partHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  partHeaderTextContainer: {
    flexDirection: 'column',
  },
  partName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  manufacturer: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    paddingVertical: 5,
  },
  partDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  partDetailsTextContainer: {
    flexDirection: 'column',
  },
  partNumber: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
  },
  stockQuantity: {
    fontSize: 16,
    paddingVertical: 5,
  },
  hsCode: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
    paddingVertical: 5,
  },
  inventoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inventoryText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
  },
  noDataText: {
    color: Colors.black,
    fontSize: 18,
    textAlign: 'center',
  },
});

export const pendingStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    paddingBottom: 20,
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  ProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileDetails: {
    flexDirection: 'row',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  NameText: {
    color: Colors.Iconwhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
  roleText: {
    color: Colors.Iconwhite,
    fontSize: 12,
    fontWeight: '600',
  },
  profileImageContainer: {
    height: 50,
    width: 50,
    backgroundColor: Colors.Iconwhite,
    borderRadius: 25,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  contentContainer: {
    padding: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  boxWrapper: {
    flex: 1,
  },
  box: {
    backgroundColor: Colors.Iconwhite,
    padding: 15,
    margin: 5,
    elevation: 4,
    borderWidth: 0.8,
    borderColor: Colors.lightGrey,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 25,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  boxLabel: {
    fontSize: 14,
    color: Colors.lightGreish,
    textAlign: 'center',
    fontWeight: '500',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  HeaderText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '600',
  },
  viewAllText: {
    color: Colors.black,
    fontSize: 14,
  },
  assignmentList: {
    marginTop: 20,
  },
  assignmentItem: {
    flexDirection: 'column',
    backgroundColor: Colors.Iconwhite,
    marginHorizontal: 18,
    marginBottom: 20,
    borderRadius: 5,
  },
  dateTime: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  dateText: {
    color: Colors.white,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  customerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  status: {
    fontWeight: "400",
    backgroundColor: Colors.primary,
    padding: 7,
    color: Colors.Iconwhite,
    borderRadius: 15,
  },
  noDataText: {
    color: Colors.black,
    fontSize: 18,
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center'
  },
})


