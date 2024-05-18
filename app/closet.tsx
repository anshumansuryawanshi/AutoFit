import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    index: undefined;
    add: undefined; 
    dress: undefined;
    closet: undefined;
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        padding: 0,
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#E25D61',
    },
    itemContainer: {
        padding: 10,
        width: 120,
        height: 120,
        backgroundColor: 'white',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottomButton: {
        width: '90%',
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});

export default function ViewCloset() {
    const navigation = useNavigation<NavigationProp>();
    return (
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
    );
}
