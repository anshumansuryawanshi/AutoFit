import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image, useColorScheme} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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

export default function Personalize() {
    const navigation = useNavigation<NavigationProp>();
    const colorScheme = useColorScheme();
    return (
        <>
            <SafeAreaView style={{backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}}/>
            <View>
                <Text>Welcome to Personalize Page</Text>
                {/* Add your components and content here */}
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('index')}>
                            <Text style={styles.buttonText}>Take Me Home</Text>
                </TouchableOpacity>
            </View>
        </>
        
    );
};

