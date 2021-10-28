import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CheckInCheckOut = ({
  checkInFrom,
  checkInTo,
  checkOutFrom,
  checkOutTo,
}: {
  checkInFrom: string;
  checkInTo: string;
  checkOutFrom: string;
  checkOutTo: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalAlign}>
        <Text style={styles.textBold}>Check In From-To: </Text>
        <Text style={styles.text}>
          {checkInFrom} - {checkInTo}
        </Text>
      </View>

      <View style={styles.horizontalAlign}>
        <Text style={styles.textBold}>Check Out From-To: </Text>
        <Text style={styles.text}>
          {checkOutFrom} - {checkOutTo}
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
  text: {
    fontSize: 17,
  },
});

export default CheckInCheckOut;
