import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const HotelTitle = ({name}: {name: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: -1,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    backgroundColor: '#D7B377',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

export default HotelTitle;
