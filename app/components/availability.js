import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Availability = () => {
    // Sample data, can be fetched from an API or database
    const days = [
        { day: "MON", date: 13 },
        { day: "TUE", date: 14 },
        { day: "WED", date: 15 },
        { day: "THU", date: 16 },
        { day: "FRI", date: 17 },
        { day: "SAT", date: 18 },
    ];

    const times = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM"];

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.month}>November, 2021<Image source={require('../../assets/downarrow.png')}/></Text>
            <View style={styles.daysContainer}>
                {days.map(item => (
                    <TouchableOpacity 
                        key={item.date}
                        style={[styles.dayBox, item.date === selectedDate && styles.selectedDay]}
                        onPress={() => setSelectedDate(item.date)}
                    >
                        <Text style={[styles.dateText, item.date === selectedDate ? styles.selectedText : null]}>{item.date}</Text>
                        <Text style={item.date === selectedDate ? styles.selectedText : null}>{item.day}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.timeHeader}>Available Time</Text>
            <Text style={styles.sectionHeader}>Morning</Text>
            <View style={styles.timesContainer}>
                {times.map(time => (
                    <TouchableOpacity key={time} style={styles.timeBox}>
                        <Text>{time}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white', // Assuming a white background
    },
    month: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: 24,
      textAlign: 'center'
    },
    daysContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    dayBox: {
      alignItems: 'center',
      padding: 16,
      borderRadius: 16,
      backgroundColor: '#EEEEEE',
    },
    selectedDay: {
      backgroundColor: '#39AAB4',
    },
    selectedText: {
        color: 'white'
    },
    dateText: {
      marginTop: 4,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333333',
    },
    timeHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: 10,
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#15AEB2',
      marginBottom: 10,
    },
    timesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    timeBox: {
      padding: 10,
      backgroundColor: '#EEEEEE',
      borderRadius: 10, // Rounded corners as observed in the design
      marginBottom: 10,
      alignItems: 'center',
      width: '30%', // Adjust for space between two timings
    },
  });  

export default Availability;
