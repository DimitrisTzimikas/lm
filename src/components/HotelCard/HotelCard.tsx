import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
/* Local Files */
import {HotelType} from '../../types';
import ImageList from './ImageList';
import HotelTitle from './Title';
import HotelLocation from './Location';

const HotelCard = ({hotel}: {hotel: HotelType}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HotelTitle name={hotel.name} />

      <Text style={styles.text}>{hotel.stars}</Text>
      <Text style={styles.text}>{hotel.userRating}</Text>

      <HotelLocation
        address={hotel.location.address}
        city={hotel.location.city}
        latitude={hotel.location.latitude}
        longitude={hotel.location.longitude}
      />

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
    backgroundColor: '#F5F0F6',

    marginVertical: 10,
    marginHorizontal: 20,

    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,

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
