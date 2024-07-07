import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
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
    backgroundColor: 'black',
    justifyContent: 'center',
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: RFValue(25, 812),
    textAlign: 'center',
  },
  imagePreview: {
    width: '100%',
    height: '80%',
  },
});

export default function App() {
  const navigation = useNavigation<NavigationProp>();
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo) {
        setPhotoUri(photo.uri);
      }
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', color: 'white' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" color="#E25D61" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {photoUri ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: photoUri }} style={styles.imagePreview} />
          <Button title="Save Photo" onPress={() => console.log('Save photo logic here')} />
          <Button title="Retake" onPress={() => setPhotoUri(null)} />
        </View>
      ) : (
        <CameraView style={styles.camera} ref={cameraRef}>
          <TouchableOpacity style={styles.savebutton} onPress={takePicture}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Take Photo</Text>
          </TouchableOpacity>
        </CameraView>
      )}
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('index')}>
        <Text style={styles.footerText}>Take Me Home</Text>
      </TouchableOpacity>
    </View>
  );
}