import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginPage from '../(tabs)/LoginPage';
import SignUpPage from './SignUpPage';
import { useNavigation } from '@react-navigation/native'; // useNavigation ekledik

export default function IndexPage() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const navigation = useNavigation(); // navigation nesnesini aldık

  const handleRegisterPress = () => {
    setShowLoginPage(false); // SignUpPage'e geçiş yap
  };

  return (
    <View style={styles.container}>
      {showLoginPage ? (
        <LoginPage onRegisterPress={handleRegisterPress} />
      ) : (
        <SignUpPage navigation={navigation} /> // navigation prop'unu aktardık
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});