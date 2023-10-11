import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Tab = ({ label, icon, isActive, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {isActive ? (
        <Text style={styles.activeLabel}>{label}</Text>
      ) : (
        <Image source={icon} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLabel: {
    fontSize: 16,
    color: '#EA1A65'
  },
  icon: {
    width: 24, 
    height: 24, 
    resizeMode: 'contain',
  },
});

export default Tab;
