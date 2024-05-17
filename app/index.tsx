import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align items to the bottom of the container
    backgroundColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 20, 
    backgroundColor: 'black', // Black background for the buttons area
  },
  rightbutton: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Allow buttons to expand equally
    paddingLeft: 40,
  },
  leftbutton: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Allow buttons to expand equally
    paddingRight: 100,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dressButton: {
    width: 120,
    height: 120,
    backgroundColor: 'red',
    borderRadius: 75,
    position: 'absolute',
    bottom: 30, 
    alignSelf: 'center', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.leftbutton} onPress={() => console.log("Add Clothes pressed")}>
          <Text style={[styles.text, { textAlign: 'left' }]}>Add Clothes</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightbutton} onPress={() => console.log("View Closet pressed")}>
          <Text style={[styles.text, { textAlign: 'right' }]}>View Closet</Text> 
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.dressButton} onPress={() => console.log("Dress Me Up! pressed")}>
        <Text style={styles.text}>Dress Me Up!</Text>
      </TouchableOpacity>
    </View>
  );
}
