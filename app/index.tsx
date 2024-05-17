import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  middlecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120,
  },
  middletext:{
    fontSize: 60,
    color: 'black',
  },
  footercontainer: {
    flex: 1,
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
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22
  },
  dressButton: {
    width: 190,
    height: 190,
    backgroundColor: 'red',
    borderRadius: 95,
    position: 'absolute',
    bottom: 0, 
    alignSelf: 'center', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.middlecontainer}>
        <Text style={[styles.middletext, { textAlign: 'center' }]}>Hi [Name], ready for today's best outfit?</Text>
      </View>
      
      <View style={styles.footercontainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.leftbutton} onPress={() => console.log("Add Clothes pressed")}>
            <Text style={[styles.rectangleText, { textAlign: 'center' }]}>Add Clothes</Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightbutton} onPress={() => console.log("View Closet pressed")}>
            <Text style={[styles.rectangleText, { textAlign: 'center' }]}>View Closet</Text> 
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.dressButton} onPress={() => console.log("Dress Me Up! pressed")}>
          <Text style={styles.circleText}>Dress Me Up!</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
