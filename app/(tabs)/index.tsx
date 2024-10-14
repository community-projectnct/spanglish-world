import { Image, StyleSheet, Platform, View, Button, ScrollView, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handleYouTubePress = () => {
    Linking.openURL('https://www.youtube.com');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/bg.png')}
          style={styles.headerImage}
        />
      }
    >

        <Button title="YouTube" color="#FFD700" onPress={handleYouTubePress} />
     

      {/* Channels Section */}
      <ThemedView style={styles.channelsSection}>
        <ThemedText type="subtitle" style={styles.channelsTitle}>Our Channels</ThemedText>
      </ThemedView>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.channelIcons}>
          <Image source={require('@/assets/images/channel1.png')} style={styles.channelIcon} />
          <Image source={require('@/assets/images/channel2.png')} style={styles.channelIcon} />
          <Image source={require('@/assets/images/channel3.png')} style={styles.channelIcon} />
        </View>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  logo: {
    height: 60,
    width: 120,  // Adjust size as needed
    marginBottom: 10,
    alignSelf: 'center', // Center the logo
  },
  slogan: {
    fontSize: 16,
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignSelf: 'center', // Center the slogan
  },
  headerContent: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add semi-transparent overlay
  },
  headerTitle: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFF',
    marginVertical: 8,
  },
  channelsSection: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  channelsTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  channelIcons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  channelIcon: {
    height: 500,
    width: '100%',
    marginBottom: 10,
  },
});