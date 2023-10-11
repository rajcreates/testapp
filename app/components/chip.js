import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Chip = ({ icon, label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 10,
  },
  icon: {
    width: 20,  // Adjust as needed
    height: 20, // Adjust as needed
    marginRight: 8, // Space between icon and text
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  value: {
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    marginBottom: 12,
    color: '#9F9f9F'
  },
});

export default Chip;
