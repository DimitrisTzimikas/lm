import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Contact = ({
  phoneNumber,
  email,
}: {
  phoneNumber: string;
  email: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalAlign}>
        <Text style={styles.textBold}>Phone Number: </Text>
        <Text style={styles.text}>{phoneNumber}</Text>
      </View>

      <View style={styles.horizontalAlign}>
        <Text style={styles.textBold}>Email: </Text>
        <Text style={styles.text}>{email}</Text>
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
  },
  textBold: {
    fontSize: 17,
    fontWeight: '600',
  },
  text: {
    fontSize: 17,
  },
});

export default Contact;
