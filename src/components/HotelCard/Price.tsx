import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Price = ({price, currency}: {price: number; currency: string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalAlign}>
        <Text style={styles.textBold}>Price: </Text>
        <Text style={styles.text}>{`${price} ${currency}`}</Text>
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

    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  horizontalAlign: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontSize: 20,
    fontWeight: '600',
  },
  text: {
    fontSize: 20,
  },
});

export default Price;
