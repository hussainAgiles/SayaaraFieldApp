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