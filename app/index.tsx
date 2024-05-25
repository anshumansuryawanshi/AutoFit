
import { View, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView, useColorScheme} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Location from 'expo-location';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';


type RootStackParamList = {
  index: undefined;
  add: undefined; 
  dress: undefined;
  closet: undefined;
  personalize: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'index'>;

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  headercontainer: {
    justifyContent: 'space-between', 
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: RFValue(30, 812),
  },
  weathercontainer: {
    paddingLeft: RFValue(25, 812),
    alignItems: 'center',
  },
  weathertext:{
    textAlign: 'center',
    fontSize: RFValue(22, 812),
    paddingTop: RFValue(5, 812)
  },
  weatherImage: {
    width: RFValue(60, 812),
    height: RFValue(60, 812),
  },
  personalizecontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: RFValue(25, 812)
  },
  personalizetext:{
    fontSize: RFValue(18, 812),
    color: 'white',
  },
  personalizebutton:{
    width: RFValue(120, 812),
    height: RFValue(60, 812),
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10, 812),
    backgroundColor: 'black',
    borderRadius: RFValue(10, 812),
  },
  middlecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: RFValue(90, 812)
  },
  middletext:{
    fontSize: RFValue(70, 812),
    color: 'black',
  },
  footercontainer: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: RFValue(18, 812), 
    backgroundColor: 'black', 
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

type WeatherImageKey = 'clear' | 'nightclear' | 'cloud' | 'nightcloud' | 'drizzle' | 'nightrain' | 'rain' | 'thunderstorm' | 'snow' | 'nightsnow' | 'mist' | 'default';

type WeatherImages = {
  [key in WeatherImageKey]: any;
};

const weather_images: WeatherImages = {
  clear: require('../assets/images/clear.png'),
  nightclear: require('../assets/images/nightclear.png'),
  cloud: require('../assets/images/cloud.png'),
  nightcloud: require('../assets/images/nightcloud.png'),
  drizzle: require('../assets/images/drizzle.png'),
  nightrain: require('../assets/images/nightrain.png'),
  rain: require('../assets/images/rain.png'),
  thunderstorm: require('../assets/images/thunderstorm.png'),
  snow: require('../assets/images/snow.png'),
  nightsnow: require('../assets/images/nightsnow.png'),
  mist: require('../assets/images/mist.png'),
  default: require('../assets/images/weather_icon.png'),
};

export default function Index() {
  const navigation = useNavigation<NavigationProp>();
  let weather_api_key = "b619c02ef0d0c5ea4a66d9ddf680e09f";
  let city = "Ann Arbor";
  const [tempInFarenheit, setTempInFarenheit] = useState<string>("...");
  const [weather_path, setWeatherPath] = useState<WeatherImageKey>('default');

  const fetchWeatherData = async (location: Location.LocationObject) => {
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${weather_api_key}`;
    try{
      const response = await fetch(weather_url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      let kelvin = data.main.temp;
      let exact = (1.8 * (kelvin - 273) + 32)
      //if exact is a decimal, round to the nearest whole number
      console.log("Exact F: ", exact);
      let farenheit = Math.round(exact);
      console.log("Farenheit: ", farenheit);
      console.log("Longitude: ", location.coords.longitude);
      console.log("Latitude: ", location.coords.latitude);
      let str_farenheit = farenheit.toString();
      setTempInFarenheit(str_farenheit);
      if(data.weather && data.weather[0].icon) {
        switch(data.weather[0].icon) {
          case "01d":
            setWeatherPath('clear');
            break;
          case "01n":
            setWeatherPath('nightclear');
            break;
          case "02d":
          case "03d":
          case "04d":
            setWeatherPath('cloud');
            break;
          case "02n":
          case "03n":
          case "04n":
            setWeatherPath('nightcloud');
            break;
          case "09d":
            setWeatherPath('drizzle');
            break;
          case "09n":
            setWeatherPath('nightrain');
            break;
          case "10d":
            setWeatherPath('rain');
            break;
          case "10n":
            setWeatherPath('nightrain');
            break;
          case "11d":
          case "11n":
            setWeatherPath('thunderstorm');
            break;
          case "13d":
            setWeatherPath('snow');
            break;
          case "13n":
            setWeatherPath('nightsnow');
            break;
          case "50d":
          case "50n":
            setWeatherPath('mist');
            break;
          default:
            console.log('Default case hit, setting to cloud_icon');
            setWeatherPath('cloud');
        }
      }
    }
    catch(error){
      console.log("Error fetching weather data: ", error);
    }

  };
  const fetchUserLocationAndWeather = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    fetchWeatherData(location);
  };

  useEffect(() => {
    fetchUserLocationAndWeather();;
  }, []);
  
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}}>
        <View style = {styles.headercontainer}>
          <View style = {styles.weathercontainer}>
            <Image source={weather_images[weather_path]} style={styles.weatherImage} />
            <Text style={[styles.weathertext]}>{tempInFarenheit}°F</Text>
          </View>

          <View style = {styles.personalizecontainer}>
            <TouchableOpacity style={styles.personalizebutton} onPress={() => navigation.navigate('personalize')}>
              <Text style={[styles.personalizetext, { textAlign: 'center' }]}>Personalize</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>


      <View style={styles.middlecontainer}>
        <Text style={[styles.middletext, { textAlign: 'center' }]}>Hi [Name], ready for today's best outfit?</Text>
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

        <TouchableOpacity activeOpacity = {.85} style={styles.dressButton} onPress={() => navigation.navigate('dress')}> 
          <Text style={styles.circleText}>Dress Me Up!</Text>
        </TouchableOpacity>
      

      </View>
    </View>


  );
}