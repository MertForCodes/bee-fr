import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const NewAccount2 = ({ navigation }) => {
    const [beeName, setBeeName] = useState('');

    const handleStart = () => {
        if (beeName) {
            navigation.navigate('Home', { beeName }); // Varsayılan olarak Home sayfasına yönlendirildi
        } else {
            alert('Lütfen arınızın adını girin.');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/kovan1.png')} style={styles.kovanImage} />

            <Text style={styles.title}>Minik Arımızın İsmi Nedir ?</Text>
            <TextInput
                style={styles.input}
                placeholder="İsim"
                value={beeName}
                onChangeText={setBeeName}
            />

            <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                <Text style={styles.startButtonText}>Haydi Başlayalım!</Text>
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
    },
    kovanImage: {
        width: 300,
        height: 300,
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    startButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'green',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default NewAccount2;