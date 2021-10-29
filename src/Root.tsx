import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Button,
} from 'react-native';
/* Local Files */
import HotelCard from './components/HotelCard/HotelCard';
import {HotelType} from './types/types';
import {compareBaseOnProperty} from './util/compare';

const API_ENDPOINT =
  'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507';

export default function App() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hotels, setHotels] = useState<HotelType[]>([]);

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

  const sort = () => {
    setHotels((prevData: HotelType[]) => [
      ...prevData.sort(compareBaseOnProperty('price')),
    ]);
  };

  const renderItem = ({item}: {item: HotelType}) => {
    return <HotelCard hotel={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={'Sort'} onPress={sort} />
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
