import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, SafeAreaView, useColorScheme } from 'react-native';
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
type NavigationProp = StackNavigationProp<RootStackParamList, 'closet'>;

const dataTshirts = [
    { id: '1', src: require('../assets/images/weather_icon.png') },
    { id: '2', src: require('../assets/images/weather_icon.png') },
    { id: '3', src: require('../assets/images/weather_icon.png') },
    { id: '4', src: require('../assets/images/weather_icon.png') },
    { id: '5', src: require('../assets/images/weather_icon.png') },
    { id: '6', src: require('../assets/images/weather_icon.png') },
    { id: '7', src: require('../assets/images/weather_icon.png') },
    { id: '8', src: require('../assets/images/weather_icon.png') },
];

const dataSweatpants = [
    { id: '1', src: require('../assets/images/weather_icon.png') },
    { id: '2', src: require('../assets/images/weather_icon.png') },
    { id: '3', src: require('../assets/images/weather_icon.png') },
    { id: '4', src: require('../assets/images/weather_icon.png') },
    { id: '5', src: require('../assets/images/weather_icon.png') },
    { id: '6', src: require('../assets/images/weather_icon.png') },
    { id: '7', src: require('../assets/images/weather_icon.png') },
    { id: '8', src: require('../assets/images/weather_icon.png') },
];

const dataSweatshirts = [
    { id: '1', src: require('../assets/images/weather_icon.png') },
    { id: '2', src: require('../assets/images/weather_icon.png') },
    { id: '3', src: require('../assets/images/weather_icon.png') },
    { id: '4', src: require('../assets/images/weather_icon.png') },
    { id: '5', src: require('../assets/images/weather_icon.png') },
    { id: '6', src: require('../assets/images/weather_icon.png') },
    { id: '7', src: require('../assets/images/weather_icon.png') },
    { id: '8', src: require('../assets/images/weather_icon.png') },
];

const dataButtonDowns = [
    { id: '1', src: require('../assets/images/weather_icon.png') },
    { id: '2', src: require('../assets/images/weather_icon.png') },
    { id: '3', src: require('../assets/images/weather_icon.png') },
    { id: '4', src: require('../assets/images/weather_icon.png') },
    { id: '5', src: require('../assets/images/weather_icon.png') },
    { id: '6', src: require('../assets/images/weather_icon.png') },
    { id: '7', src: require('../assets/images/weather_icon.png') },
    { id: '8', src: require('../assets/images/weather_icon.png') },
];

const dataShorts = [
    { id: '1', src: require('../assets/images/weather_icon.png') },
    { id: '2', src: require('../assets/images/weather_icon.png') },
    { id: '3', src: require('../assets/images/weather_icon.png') },
    { id: '4', src: require('../assets/images/weather_icon.png') },
    { id: '5', src: require('../assets/images/weather_icon.png') },
    { id: '6', src: require('../assets/images/weather_icon.png') },
    { id: '7', src: require('../assets/images/weather_icon.png') },
    { id: '8', src: require('../assets/images/weather_icon.png') },
];


const renderItem = ({ item }: { item: { id: string, src: any } }) => (
    <View style={styles.itemContainer}>
        <Image source={item.src} style={styles.imageStyle} />
    </View>
);

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        padding: 0,
    },
    headerText: {
        fontSize: RFValue(24, 812),
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#E25D61',
    },
    itemContainer: {
        padding: RFValue(10, 812),
        width: RFValue(120, 812),
        height: RFValue(120, 812),
        backgroundColor: 'white',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottomButton: {
        width: width * 0.9, 
        height: RFValue(50, 812),
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: RFValue(20, 812),
        borderRadius: RFValue(10, 812),
    },
    buttonText: {
        color: 'white',
        fontSize: RFValue(20, 812),
    },
});

export default function ViewCloset() {
    const navigation = useNavigation<NavigationProp>();
    const colorScheme = useColorScheme();
    return (
        <>
            <SafeAreaView style={{backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}}/>
            {/* <SafeAreaView style={{ flex: 1, position: 'absolute', top: Platform.OS === 'android' ? StatusBar.currentHeight : 0, left: 0, right: 0, bottom: 0 }}> */}
                <ScrollView style={styles.container}>

                    <View style = {styles.header}>
                        <Text style={styles.headerText}>T-SHIRTS</Text>
                        <FlatList
                            data={dataTshirts}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>SWEATPANTS</Text>
                        <FlatList
                            data={dataSweatpants}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>SWEATSHIRTS</Text>
                        <FlatList
                            data={dataSweatshirts}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>BUTTON-DOWNS</Text>
                        <FlatList
                            data={dataButtonDowns}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>SHORTS</Text>
                        <FlatList
                            data={dataShorts}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('index')}>
                        <Text style={styles.buttonText}>Take Me Home</Text>
                    </TouchableOpacity>

                </ScrollView>
            {/* </SafeAreaView> */}
        </>
    );
}
