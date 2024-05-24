import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, useColorScheme, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';
// import hsvToRgb from 'hsv-to-rgb';


type RootStackParamList = {
    index: undefined;
    add: undefined; 
    dress: undefined;
    closet: undefined;
    personalize: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'closet'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        padding: 50,
    },
    headerText: {
        fontSize: 30,
        color: '#E25D61',
        textAlign: 'center',
        backgroundColor: 'transparent',
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
    sliderContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 20,
    },
    sliderLabel: {
        fontSize: 18,
        textAlign: 'center',
    },
    sliderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    noPreferenceButton: {
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    noPreferenceButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default function Personalize() {
    const navigation = useNavigation<NavigationProp>();
    const colorScheme = useColorScheme();

    const [length, setLength] = useState<number | null>(null);
    const [formality, setFormality] = useState<number | null>(null);
    const [colorPriority, setColorPriority] = useState<number | null>(null);

    const getLengthLabel = (value: number | null) => {
        if (value === null) return 'No Preference';
        if (value <= 25) return 'Short';
        if (value <= 50) return 'Medium';
        if (value <= 75) return 'Warm Clothing';
        return 'Bundling Up';
    };

    const getFormalityLabel = (value: number | null) => {
        if (value === null) return 'No Preference';
        if (value <= 25) return 'Super Casual';
        if (value <= 50) return 'Casual';
        if (value <= 75) return 'Nicer Clothing';
        return 'Feelin\' fancy';
    };


    return (
        <>
            <SafeAreaView style={{backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}}/>
            <View style={styles.header}>
                <Text style={styles.headerText}>What preferences do you have for your outfit today?</Text>
                {/*Note, the below empty text is included for spacing/aesthetic purposes*/}
                <Text style={styles.headerText}></Text>
                <Text  style={styles.headerText}>🕺 👔 👚 🧥 🥻 👕 💃</Text>
                {/*Added the emojis for my own enterntainment, can delete later*/}
            </View>
            <View style={styles.sliderContainer}>
                <View style={styles.sliderRow}>
                    <Text style={styles.sliderLabel}>Length: {getLengthLabel(length)}</Text>
                    <TouchableOpacity style={styles.noPreferenceButton} onPress={() => setLength(null)}>
                        <Text style={styles.noPreferenceButtonText}>No Preference</Text>
                    </TouchableOpacity>
                </View>
                <Slider value={length || 0} onValueChange={(value) => setLength(Math.round(value))} minimumValue={0} maximumValue={100} />

                <View style={styles.sliderRow}>
                    <Text style={styles.sliderLabel}>Formality: {getFormalityLabel(formality)}</Text>
                    <TouchableOpacity style={styles.noPreferenceButton} onPress={() => setFormality(null)}>
                        <Text style={styles.noPreferenceButtonText}>No Preference</Text>
                    </TouchableOpacity>
                </View>
                <Slider value={formality || 0} onValueChange={(value) => setFormality(Math.round(value))} minimumValue={0} maximumValue={100} />

                <View style={styles.sliderRow}>
                    <Text style={styles.sliderLabel}>Color: {colorPriority !== null ? Math.round(colorPriority) : 'No Preference'}</Text>
                    <TouchableOpacity style={styles.noPreferenceButton} onPress={() => setColorPriority(null)}>
                        <Text style={styles.noPreferenceButtonText}>No Preference</Text>
                    </TouchableOpacity>
                </View>
                <Slider value={colorPriority || 0} onValueChange={(value) => setColorPriority(Math.round(value))} minimumValue={0} maximumValue={100} />

                <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('index')}>
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};