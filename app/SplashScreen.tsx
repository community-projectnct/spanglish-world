// SplashScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/images/sp.png')}  // Adjust path as necessary
        style={styles.logo}
      />
      <Text style={styles.tagline}>The Best Media Content for you!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',  // Orange background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,  // Adjust as needed
    height: 100, // Adjust as needed
    resizeMode: 'contain',
  },
  tagline: {
    marginTop: 20,
    fontSize: 18,
    color: '#ffffff', // White text
    textAlign: 'center',
  },
});

export default SplashScreen;
