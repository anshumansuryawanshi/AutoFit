import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image, useColorScheme} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    index: undefined;
    add: undefined; 
    dress: undefined;
    closet: undefined;
    personalize: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'dress'>;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white',
    },
    headercontainer: {
      justifyContent: 'space-between', 
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    weathercontainer: {
      paddingLeft: 20
    },
    weathertext:{
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 5
    },
    personalizecontainer:{
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 20
  
    },
    personalizetext:{
      fontSize: 15,
      color: 'white',
    },
    personalizebutton:{
      width: 100,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'black',
      borderRadius: 10,
    },
    middlecontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
    },
    middletext:{
      fontSize: 60,
      color: 'black',
    },
    footercontainer: {
      justifyContent: 'flex-end', // Align items to the bottom of the container
      backgroundColor: 'white',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      padding: 18, 
      backgroundColor: 'black', // Black background for the buttons area
    },
    rightbutton: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1, // Allow buttons to expand equally
      paddingLeft: 100,
    },
    leftbutton: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1, // Allow buttons to expand equally
      paddingRight: 100,
    },
    rectangleText: {
      color: 'white',
      fontSize: 18
    },
    circleText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 40,
      padding: 20
    },
    dressButton: {
      width: 190,
      height: 190,
      backgroundColor: '#E25D61',
      borderRadius: 95,
      position: 'absolute',
      bottom: 0, 
      alignSelf: 'center', 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
  });
  
  export default function Index() {
    const navigation = useNavigation<NavigationProp>();
    const colorScheme = useColorScheme();
    return (
      <>
        <SafeAreaView style={{backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}}/>
        <View style={styles.container}>
    
          <View style = {styles.headercontainer}>
            {/* <View style = {styles.weathercontainer}>
              <Image source={require('../assets/images/weather_icon.png')} style={{ width: 50, height: 50 }} />
              <Text style={[styles.weathertext]}> 75°F </Text>
            </View> */}
    
            {/* <View style = {styles.personalizecontainer}>
              <TouchableOpacity style={styles.personalizebutton} onPress={() => console.log("Personalize pressed")}>
                <Text style={[styles.personalizetext, { textAlign: 'center' }]}>Personalize</Text>
              </TouchableOpacity>
            </View> */}
    
          </View>
    
          <View style={styles.middlecontainer}>
            <Text style={styles.middletext}>Today's Fit:</Text>
            <Image source={require("../assets/images/rain.png")} style={{ width: 150, height: 150 }}/>
            <Image source={require("../assets/images/thunderstorm.png")} style={{ width: 150, height: 150 }}/>
            <Image source={require("../assets/images/thunderstorm.png")} style={{ width: 150, height: 150 }}/>
          </View>
          
          <View style={styles.footercontainer}>
            <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.leftbutton} onPress={() => navigation.navigate('add')}>
                <Text style={[styles.rectangleText, { textAlign: 'center' }]}>Add Clothes</Text> 
            </TouchableOpacity>
    
              <TouchableOpacity style={styles.rightbutton} onPress={() => navigation.navigate('closet')}>
                <Text style={[styles.rectangleText, { textAlign: 'center' }]}>View Closet</Text> 
              </TouchableOpacity>
            </View>
    
            <TouchableOpacity activeOpacity = {.85} style={styles.dressButton} onPress={() => console.log("Next Fit pressed")}> 
              <Text style={styles.circleText}>Next Outfit</Text>
            </TouchableOpacity>
          
    
          </View>
        </View>
      </>
    );
  }