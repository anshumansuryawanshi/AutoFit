import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image, useColorScheme} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type RootStackParamList = {
    index: undefined;
    add: undefined; 
    dress: undefined;
    closet: undefined;
    personalize: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'dress'>;

const { width, height } = Dimensions.get('window');

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
    paddingLeft: RFValue(20, 812)
  },
  weathertext:{
    textAlign: 'center',
    fontSize: RFValue(20, 812),
    paddingTop: RFValue(5, 812)
  },
  personalizecontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: RFValue(20, 812)
  },
  personalizetext:{
    fontSize: RFValue(15, 812),
    color: 'white',
  },
  personalizebutton:{
    width: RFValue(100, 812),
    height: RFValue(50, 812),
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10, 812),
    backgroundColor: 'black',
    borderRadius: RFValue(10, 812),
  },
  middlecontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: RFValue(10, 812),
  },
  middletext:{
    fontSize: RFValue(60, 812),
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
    padding: RFValue(18, 812), 
    backgroundColor: 'black', // Black background for the buttons area
  },
  rightbutton: {
    padding: RFValue(10, 812),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    paddingLeft: RFValue(100, 812),
  },
  leftbutton: {
    padding: RFValue(10, 812),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    paddingRight: RFValue(100, 812),
  },
  rectangleText: {
    color: 'white',
    fontSize: RFValue(20, 812)
  },
  circleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(50, 812),
    padding: RFValue(20, 812)
  },
  dressButton: {
    width: width * 0.5,
    height: width * 0.5,
    backgroundColor: '#E25D61',
    borderRadius: width * 0.25,
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
            <Image source={require("../assets/images/snow.png")} style={{ width: 150, height: 150 }}/>
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