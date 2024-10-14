import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const categories = [
  { name: 'Baseball', icon: require('@/assets/images/baseball-player.png') },
  { name: 'Basketball', icon: require('@/assets/images/basketball.png')},
  { name: 'Football', icon: require('@/assets/images/football.png')},
  { name: 'Soccer', icon: require('@/assets/images/shoot.png') },
  { name: 'Rugby', icon: require('@/assets/images/rugby-ball.png') },
  { name: 'Tennis', icon: require('@/assets/images/tennis.png')},
  { name: 'Hockey', icon: require('@/assets/images/ice-hockey.png')},
  { name: 'More', icon: require('@/assets/images/application.png') },
];

const latestShows = [
  { title: 'Show 1', image: require('@/assets/images/channel1.png') },
  { title: 'Show 2', image: require('@/assets/images/channel2.png') },
  { title: 'Show 3', image: require('@/assets/images/channel3.png') },
  // Add more shows as needed
];

const handleCategoryPress = (categoryName: string) => {
  Alert.alert(`You selected ${categoryName}`);
};

export default function SportsScreen() {
  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.categoryWrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryContainer}>
              {categories.map((category, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.categoryItem}
                  onPress={() => handleCategoryPress(category.name)}
                >
                  <Image source={category.icon} style={styles.icon} />
                  <Text style={styles.categoryText}>{category.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Gap Between Categories and Latest Shows */}
      <View style={styles.separator} />

      {/* New Section for Latest Shows */}
      <View style={styles.showsContainer}>
        <Text style={styles.showsTitle}>Our Latest Shows</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {latestShows.map((show, index) => (
            <View key={index} style={styles.showItem}>
              <Image source={show.image} style={styles.showImage} />
              <Text style={styles.showTitle}>{show.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0,
  },
  container: {
    alignItems: 'center',
    paddingTop: 20,
    maxHeight: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryWrapper: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    width: 50,
    height: 50,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 16,
  },

  // Separator between sections
  separator: {
    height: 40, // Adjust the height as needed to increase the gap between sections
  },

  showsContainer: {
    padding: 20,
    backgroundColor: '#E8EAF6',
    marginTop: 20,
    borderRadius: 10,
  },
  showsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  showItem: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%', // Ensure the show item takes the full width
  },
  showImage: {
    width: '100%', // Ensure the image takes the full width
    height: 300, // Adjust the height as needed
    borderRadius: 10,
  },
  showTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
