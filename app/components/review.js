import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Reviews = () => {
    const reviewsData = [
        // Sample data
        { id: 1, name: 'Maggie Rhee', date: '16 days ago', reason: 'Visited for pain', rating: 4, content: 'Great caring doctor & practice. Very accessible, especially during these times.Highly recommend.', imageUrl: require('../../assets/reviewer-one.png') },
        // ... more reviews
    ];

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#e0e0e0',}}>
              <Text style={styles.heading}>Patient details</Text>
              <Image source={require('../../assets/addicon.png')}/>
            </View>
            {reviewsData.map(item => (
              <View key={item.id} style={{ borderBottomWidth: 1,
                borderBottomColor: '#e0e0e0', paddingBottom: 16 }}>
                <View key={item.id} style={styles.reviewContainer}>
                    <Image source={item.imageUrl} style={styles.reviewerImage} />
                    <View style={styles.reviewerDetails}>
                        <Text style={styles.reviewerName}>{item.name}</Text>
                        <Text style={styles.reason}>{item.reason}</Text>
                        <Image source={require('../../assets/ratingstars.png')}/>
                    </View>

                    <Text style={styles.reviewDate}>{item.date}</Text>
                </View>
                <Text style={styles.reviewContent}>{item.content}</Text>
              </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111'
  },
  reviewContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  reviewerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  reviewerDetails: {
    flex: 1,
  },
  reviewerName: {
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  reviewDate: {
    color: '#15AEB2',
  },
  reviewContent: {
    color: '#333333',
  },
  reason: {
    color: '#9F9f9F',
    marginBottom: 8
  }
});

export default Reviews;
