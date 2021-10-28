import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
/* Local Files */
import HotelCard from './components/HotelCard/HotelCard';
import {HotelType} from './types';

const API_ENDPOINT =
  'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507';

export default function App() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hotels, setHotels] = useState<any>([]);

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = () => {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then((data: any) => {
        setHotels(data);
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const renderItem = ({item}: {item: HotelType}) => {
    return <HotelCard hotel={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={hotels}
          renderItem={renderItem}
          keyExtractor={hotel => hotel.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
