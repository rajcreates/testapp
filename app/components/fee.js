import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Fees = () => {
    const feesData = {
        inClinic: "$ 80.70 \n\t\t\t\t\t\t Rs.1400",
        virtual: "$ 80.70 \n\t\t\t\t\t\t Rs.1400",
    };

    return (
        <View style={styles.container}>
            <View style={styles.feeContainer}>
                <Image source={require('../../assets/inclinic.png')}/>
                <Text style={styles.feeType}>In-Clinic Appointment</Text>
                <Text style={styles.feeAmount}>Fees:{feesData.inClinic}</Text>
            </View>
            
            <View style={styles.feeContainer}>
                <Image source={require('../../assets/appointment.png')}/>
                <Text style={styles.feeType}>Virtual Appointment</Text>
                <Text style={styles.feeAmount}>Fees:{feesData.virtual}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  feeType: {
    fontSize: 16,
    color: '#333333',
  },
  feeAmount: {
    fontSize: 16,
    color: '#333333',
  },
  feeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  }
});

export default Fees;
