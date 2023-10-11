import React from 'react';
import { Pressable, Text, StyleSheet, View, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Button = ({ label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
            <View>
                <Text style={{fontSize: 16, color: 'white'}}>Next Available</Text>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Now</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', paddingHorizontal: 12}}>
                    {label}
                </Text>
                <Image source={require('../../assets/nexticon.png')} />
            </View>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    margin: 16,
    backgroundColor: '#39AAB4',
    borderRadius: 8,
    justifyContent: 'space-between'
  },
  buttonContainer: {
    width: screenWidth,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    zIndex: 1000,
  }
});

export default Button;
