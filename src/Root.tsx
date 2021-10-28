import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.saveAreaView}>
      <View>
        <Text>Home Page</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saveAreaView: {
    flex: 1,
  },
});

export default App;
