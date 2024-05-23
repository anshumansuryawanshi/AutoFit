import { CameraView, useCameraPermissions } from 'expo-camera';
import React from 'react';
import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Camera } from 'expo-camera';

type RootStackParamList = {
  index: undefined;
  add: undefined; 
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'add'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  camera: {
    flex: 1,
  },
  savebutton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#E25D61',
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
  },
  footerButton: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  footerText: {
    color: 'white',
    fontSize: 20,
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
