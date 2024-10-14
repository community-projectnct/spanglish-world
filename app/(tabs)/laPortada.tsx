import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
export default function LaPortadaScreen() {
  const injectedJavaScript = `
    (function() {
      // Hide the specific navigation element
      var navElement = document.querySelector('.elementor-element.elementor-widget-ekit-nav-menu');
      if (navElement) {
        navElement.style.display = 'none';
      }
    })();
    true; // Required for the injected JavaScript to execute properly
  `;

  return (
    <View style={styles.container}>
    <WebView 
      source={{ uri: 'https://www.laportadacanada.com/' }} // Replace with your desired URL
      style={{ flex: 1 }} 
      injectedJavaScript={injectedJavaScript} // Inject the JavaScript
      javaScriptEnabled={true} // Ensure JavaScript is enabled
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
