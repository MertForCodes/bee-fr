import React, { useState } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Image, Text, TouchableOpacity } from 'react-native';
import { Button, TextInput, Provider as PaperProvider } from 'react-native-paper';

const LoginPage: React.FC = ({ onRegisterPress }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Hata', 'Lütfen e-posta ve şifrenizi girin.');
            return;
        }
        Alert.alert('Başarılı', 'Giriş başarılı!');
    };

    return (
        <PaperProvider>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.topSection}>
                        <Image source={require('../../assets/images/Cloud.png')} style={styles.cloudImage} />
                        <Image source={require('../../assets/images/Cloud.png')} style={styles.cloudImageRight} />
                    </View>

                    <View style={styles.centerSection}>
                        <View style={styles.speechBubble}>
                            <Text style={styles.welcomeText}>
                                Haydi Hep Birlikte Eğlenerek Öğrenelim!
                            </Text>
                            <View style={styles.speechBubbleTriangle} />
                        </View>
                        <Image source={require('../../assets/images/ari1.png')} style={styles.beeImage} />
                    </View>

                    <View style={styles.bottomSection}>
                        <View style={styles.form}>
                            <TextInput
                                label="Telefon Numarası veya E-mail"
                                value={email}
                                onChangeText={setEmail}
                                mode="outlined"
                                style={styles.input}
                                keyboardType="email-address"
                            />
                            <TextInput
                                label="Şifre"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!passwordVisible}
                                mode="outlined"
                                style={styles.input}
                                right={<TextInput.Icon name={passwordVisible ? "eye-off" : "eye"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                            />
                        </View>

                        <View style={styles.footer}>
                            <Button
                                mode="contained"
                                onPress={handleLogin}
                                style={styles.button}
                                theme={{ colors: { primary: '#4CAF50', onPrimary: 'white' } }}
                            >
                                Giriş Yap
                            </Button>
                            <Text style={styles.registerText}>
                                Hesabın Yok Mu?
                                <TouchableOpacity onPress={onRegisterPress}>
                                    <Text style={styles.registerLink}>Hesap Oluştur</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#92c7f0',
    },
    topSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cloudImage: {
        width: 160,
        height: 160,
        marginTop: 50,
        marginLeft: -5,
    },
    cloudImageRight: {
        width: 160,
        height: 160,
        marginTop: 22,
        marginRight: 20,
    },
    centerSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    speechBubble: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        position: 'absolute',
        top: '-5%',
        left: '60%',
        marginLeft: -150,
        width: 300,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    speechBubbleTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        position: 'absolute',
        bottom: -20,
        left: 10,
        marginLeft: -10,
        transform: [{ rotate: '80deg' }],
    },
    beeImage: {
        width: 235,
        height: 235,
        marginLeft: -150,
        marginTop: 100,
    },
    bottomSection: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        justifyContent: 'flex-end',
    },
    form: {
        marginBottom: 5,
        marginTop: 30,
    },
    input: {
        marginBottom: 15,
        backgroundColor: 'white',
    },
    footer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    button: {
        width: '80%',
        marginTop: 10,
    },
    registerText: {
        color: '#333',
        textAlign: 'center',
        marginTop: 10,
    },
    registerLink: {
        color: '#1e90ff',
        fontWeight: 'bold',
    },
});

export default LoginPage;