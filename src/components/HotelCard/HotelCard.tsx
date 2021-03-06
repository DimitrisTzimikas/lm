import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
/* Local Files */
import {HotelType} from '../../types/types';
import ImageList from './CardComponents/ImageList';
import HotelTitle from './CardComponents/Title';
import HotelLocation from './CardComponents/Location';
import UserRating from './CardComponents/UserRating';
import CheckInCheckOut from './CardComponents/CheckInCheckout';
import Price from './CardComponents/Price';
import Contact from './CardComponents/Contact';

const HotelCard = ({hotel}: {hotel: HotelType}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HotelTitle name={hotel.name} stars={hotel.stars} />

      <UserRating rating={hotel.userRating} />

      <HotelLocation
        address={hotel.location.address}
        city={hotel.location.city}
        latitude={hotel.location.latitude}
        longitude={hotel.location.longitude}
      />

      <CheckInCheckOut
        checkInFrom={hotel.checkIn.from}
        checkInTo={hotel.checkIn.to}
        checkOutFrom={hotel.checkOut.from}
        checkOutTo={hotel.checkOut.to}
      />

      <Contact
        phoneNumber={hotel.contact.phoneNumber}
        email={hotel.contact.email}
      />

      <ImageList photos={hotel.gallery} />

      <Price price={hotel.price} currency={hotel.currency} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
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
