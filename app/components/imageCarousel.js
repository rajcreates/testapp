import React from 'react';
import { ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ImageCarousel = ({ images}) => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
      {images.map((image, index) => (
        <Image key={index} source={image} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: 250,
  },
});

export default ImageCarousel;
