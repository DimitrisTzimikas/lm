import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
/* Local Files */
import {HotelType} from '../types';
import ImageList from './ImageList';

const HotelCard = ({hotel}: {hotel: HotelType}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{hotel.name}</Text>
      <Text style={styles.text}>{hotel.stars}</Text>
      <Text style={styles.text}>{hotel.userRating}</Text>

      <Text style={styles.text}>{hotel.location.address}</Text>
      <Text style={styles.text}>{hotel.location.city}</Text>
      <Text style={styles.text}>{hotel.location.latitude}</Text>
      <Text style={styles.text}>{hotel.location.longitude}</Text>

      <Text style={styles.text}>{hotel.checkIn.from}</Text>
      <Text style={styles.text}>{hotel.checkIn.to}</Text>

      <Text style={styles.text}>{hotel.checkOut.from}</Text>
      <Text style={styles.text}>{hotel.checkOut.to}</Text>

      <Text style={styles.text}>{hotel.contact.phoneNumber}</Text>
      <Text style={styles.text}>{hotel.contact.email}</Text>

      <ImageList photos={hotel.gallery} />

      <Text style={styles.text}>{hotel.price}</Text>
      <Text style={styles.text}>{hotel.currency}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,

    paddingVertical: 20,
    paddingHorizontal: 10,

    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 0.2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    paddingVertical: 5,
    textAlign: 'center',
  },
});

export default HotelCard;
