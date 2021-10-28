import React from 'react';
import {StyleSheet, View, Text, Linking, Platform} from 'react-native';

const HotelLocation = ({
  address,
  city,
  latitude,
  longitude,
}: {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}) => {
  const scheme: string | undefined = Platform.select({
    ios: 'maps:0,0?q=',
    android: 'geo:0,0?q=',
  });
  const latLng: string = `${latitude},${longitude}`;
  const label: string = 'Custom Label';
  const url: string | undefined = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  const openLink = () => Linking.openURL(url || '');

  return (
    <View style={styles.container}>
      <View style={styles.horizontalAlign}>
        <Text style={styles.textBold}>Address: </Text>
        <Text style={styles.textAddress} onPress={openLink}>
          {address}
        </Text>
      </View>

      <View style={styles.horizontalAlign}>
        <Text style={styles.textBold}>City: </Text>
        <Text style={styles.text}>{city}</Text>
      </View>

      <View style={styles.horizontalAlign}>
        <Text style={styles.textBold}>Coordinates: </Text>
        <Text style={styles.text}>
          {latitude}, {longitude}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 5,

    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  horizontalAlign: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBold: {
    fontSize: 17,
    fontWeight: '600',
  },
  textAddress: {
    fontSize: 17,
    color: '#2d23be',
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 17,
  },
});

export default HotelLocation;
