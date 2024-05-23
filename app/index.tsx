
import { View, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView, useColorScheme} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Location from 'expo-location';


type RootStackParamList = {
  index: undefined;
  add: undefined; 
  dress: undefined;
  closet: undefined;
  personalize: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'index'>;

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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 90
  },
  middletext:{
    fontSize: 60,
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
    padding: 18, 
    backgroundColor: 'black', 
  },
  rightbutton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    paddingLeft: 100,
  },
  leftbutton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
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
            <Image source={weather_images[weather_path]} style={{ width: 50, height: 50 }} />
            <Text style={[styles.weathertext]}> {tempInFarenheit}°F </Text>
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