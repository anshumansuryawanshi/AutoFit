// add.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    index: undefined;
    add: undefined; 
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'add'>;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
      },

    headerContainer: {
      backgroundColor: '#E25D61', // Change this to any color you want
      marginTop: 25, // Adjust this value to move the rectangle down from the top
      marginHorizontal: 20, // Adds horizontal padding to bring the edges in
      borderRadius: 10, // Rounds the corners
      paddingVertical: 10, // Vertical padding inside the rectangle
      paddingHorizontal: 30, // Horizontal padding inside the rectangle
    },

    headerText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },

    footerButton: {
        width: 200,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        bottom: 75,
        position: 'absolute',
    },

    footerText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

  });
  
  export default function App() {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Congrats on the newest addition to your closet!</Text>
        </View>
        
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('index')}>
          <Text style={styles.footerText}>Take Me Home</Text>
        </TouchableOpacity>
      </View>
    );
  }