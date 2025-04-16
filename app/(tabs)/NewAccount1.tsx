import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const NewAccount1 = ({ navigation }) => {
    const [ageRange, setAgeRange] = useState(null);

    const handleNext = () => {
        if (ageRange) {
            navigation.navigate('NewAccount2', { ageRange });
        } else {
            alert('Lütfen bir yaş aralığı seçin.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.ariContainer}>
                <Image source={require('../../assets/images/ari3.png')} style={styles.ariImage} />
                <View style={styles.speechBubble}>
                    <Text style={styles.speechText}>Yaşını Öğrenebilir Miyim?</Text>
                    <View style={styles.speechTriangle} />
                </View>
            </View>

            <TouchableOpacity
                style={[styles.ageButton, ageRange === '2-4' && styles.selectedAge]}
                onPress={() => setAgeRange('2-4')}
            >
                <Text style={styles.ageButtonText}>2-4 yaş arası</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.ageButton, ageRange === '4-6' && styles.selectedAge]}
                onPress={() => setAgeRange('4-6')}
            >
                <Text style={styles.ageButtonText}>4-6 yaş arası</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.ageButton, ageRange === '6-8' && styles.selectedAge]}
                onPress={() => setAgeRange('6-8')}
            >
                <Text style={styles.ageButtonText}>6-8 yaş arası</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.ageButton, ageRange === '8+' && styles.selectedAge]}
                onPress={() => setAgeRange('8+')}
            >
                <Text style={styles.ageButtonText}>8+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Devam</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92c7f0',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    ariContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    ariImage: {
        marginTop: -120,
        width: 140,
        height: 140,
        marginRight: 20,
    },
    speechBubble: {
        marginTop: -270,
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        maxWidth: '70%',
        position: 'relative',
    },
    speechText: {
        fontSize: 16,
    },
    speechTriangle: {
        position: 'absolute',
        bottom: -15,
        left: -15,
        width: 0,
        height: 0,
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 15,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FFF',
        transform: [{ rotate: '40deg' }],
    },
    ageButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    ageButtonText: {
        fontSize: 16,
    },
    selectedAge: {
        backgroundColor: 'green',
    },
    nextButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'green',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    nextButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default NewAccount1;
