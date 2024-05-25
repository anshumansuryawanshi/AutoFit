import { CameraView, useCameraPermissions } from 'expo-camera';
import React from 'react';
import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
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
type NavigationProp = StackNavigationProp<RootStackParamList, 'add'>;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: RFValue(20, 812),
    textAlign: 'center',
  },
  camera: {
    flex: 1,
  },
  savebutton: {
    height: RFValue(110, 812),
    width: RFValue(110, 812),
    borderRadius: RFValue(60, 812),
    backgroundColor: '#E25D61',
    position: 'absolute',
    bottom: RFValue(40, 812),
    alignSelf: 'center',
  },
  footerButton: {
    width: '100%',
    height: height * 0.1,
    backgroundColor: 'rgba(0, 0, 0)',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: RFValue(25, 812),
    textAlign: 'center',
  },
});

export default function App() {
  const navigation = useNavigation<NavigationProp>();
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <CameraView style={styles.camera}>
        <TouchableOpacity style={styles.savebutton} onPress={() => console.log("SAVE PHOTO")}> 
        </TouchableOpacity>
      </CameraView>

      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('index')}>
          <Text style={styles.footerText}>Take Me Home</Text>
        </TouchableOpacity>

    </View>
  );
}