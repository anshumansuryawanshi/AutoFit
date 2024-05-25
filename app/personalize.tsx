import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, useColorScheme, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';
import { ColorPicker } from 'react-native-color-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

type RootStackParamList = {
    index: undefined;
    add: undefined; 
    dress: undefined;
    closet: undefined;
    personalize: undefined;
    selectclothes: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'closet'>;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        padding: windowWidth * 0.05, 
    },
    headerText: {
        fontSize: RFValue(25), 
        color: '#E25D61',
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    itemContainer: {
        padding: windowWidth * 0.02, // 2% of the screen width
        width: windowWidth * 0.3, // 30% of the screen width
        height: windowHeight * 0.3, // 30% of the screen height
        backgroundColor: 'white',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottomButton: {
        width: '90%',
        height: windowHeight * 0.07, 
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: windowHeight * 0.005, 
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: RFValue(20),
    },
    sliderContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: windowWidth * 0.05, 
    },
    sliderLabel: {
        fontSize: RFValue(18), 
        textAlign: 'center',
    },
    sliderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: windowHeight * 0.01, 
    },
    noPreferenceButton: {
        backgroundColor: 'black',
        paddingHorizontal: windowWidth * 0.02, 
        paddingVertical: windowHeight * 0.005,
        borderRadius: 5,
    },
    noPreferenceButtonText: {
        color: 'white',
        fontSize: RFValue(16),
    },
    selectButton: {
        width: '90%',
        height: windowHeight * 0.07,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: windowHeight * 0.01,
        borderRadius: 10,
    },
});

export default function Personalize() {
    const navigation = useNavigation<NavigationProp>();
    const colorScheme = useColorScheme();

    const [length, setLength] = useState<number | null>(null);
    const [formality, setFormality] = useState<number | null>(null);
    const [theme, setTheme] = useState<number | null>(null);
    const [selectedColor, setSelectedColor] = useState('#000000');

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

    const getThemeLabel = (value: number | null) => {
        if (value === null) return 'No Preference';
        if (value <= 20) return 'Bright';
        if (value <= 40) return 'Dark';
        if (value <= 60) return 'Festive';
        if (value <= 80) return 'Placeholder';
        return 'Specific Color';
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
                    <Text style={styles.sliderLabel}>Theme: {getThemeLabel(theme)}</Text>
                    <TouchableOpacity style={styles.noPreferenceButton} onPress={() => setTheme(null)}>
                        <Text style={styles.noPreferenceButtonText}>No Preference</Text>
                    </TouchableOpacity>
                </View>
                <Slider value={theme || 0} onValueChange={(value) => setTheme(Math.round(value))} minimumValue={0} maximumValue={100} />

                {getThemeLabel(theme) === 'Specific Color' && (
                    <ColorPicker
                        onColorSelected={color => setSelectedColor(color)}
                        style={{flex: 1}}
                    />
                )}

                <TouchableOpacity style={styles.selectButton} onPress={() => navigation.navigate('selectclothes')}>
                    <Text style={styles.buttonText}>Select Apparel For Fit</Text>
                </TouchableOpacity>
                     
                <TouchableOpacity style={[styles.bottomButton, {marginTop: windowHeight * 0.05}]} onPress={() => navigation.navigate('index')}>
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};