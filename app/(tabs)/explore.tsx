import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const [isPushEnabled, setIsPushEnabled] = React.useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const togglePushNotifications = () => setIsPushEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://your-avatar-url.com' }} // replace with actual avatar URL
          style={styles.avatar}
        />
        <Text style={styles.profileName}>Jagjeet Singh</Text>
      </View>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Edit profile</Text>
          <Icon name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Change password</Text>
          <Icon name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Add a payment method</Text>
          <Icon name="add" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.rowText}>Push notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isPushEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={togglePushNotifications}
            value={isPushEnabled}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Dark mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleDarkMode}
            value={isDarkModeEnabled}
          />
        </View>
      </View>

      {/* More Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>More</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>About us</Text>
          <Icon name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Privacy policy</Text>
          <Icon name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Terms and conditions</Text>
          <Icon name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Zingo TV & Our Host Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Zingo TV</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Our Host</Text>
          <Icon name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#999',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rowText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
