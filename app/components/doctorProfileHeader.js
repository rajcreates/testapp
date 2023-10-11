import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageCarousel from './imageCarousel';
import Chip from './chip';

const DoctorProfileHeader = ({ doctorName, details, images }) => {
  return (
    <View style={styles.container}>
      <ImageCarousel images={images} />
      <View style={styles.doctorInfoContainer}>
        <View>
            <Text style={styles.name}>{doctorName}</Text>
            <Text style={styles.details}>{details}</Text>
        </View>
        <View style={styles.chatBg}>
            <Image source={require('../../assets/chaticon.png')}/>
        </View>
      </View>
      <View style={styles.chipsContainer}>
                <Chip icon={require('../../assets/consult.png')} label="Consults" value="800+" />
                <Chip icon={require('../../assets/experience.png')} label="Experience" value="8 Yrs+" />
                <Chip icon={require('../../assets/star.png')} label="Ratings" value="4.5" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    color: '#15AEB2',
  },
  doctorInfoContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chatBg: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 360,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  chipsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  }
});

export default DoctorProfileHeader;
