import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white' // Set the background color of the container
  },
  button: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  addButton: {
    backgroundColor: 'black',
    flex: 1
  },
  dressButton: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 35 // Makes it a circle
  },
  closetButton: {
    backgroundColor: 'black',
    flex: 1
  }
});

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => console.log("Add Clothes pressed")}>
        <Text style={styles.text}>Add Clothes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.dressButton]} onPress={() => console.log("Dress Me Up! pressed")}>
        <Text style={styles.text}>Dress Me Up!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.closetButton]} onPress={() => console.log("View Closet pressed")}>
        <Text style={styles.text}>View Closet</Text>
      </TouchableOpacity>
    </View>
  );
}