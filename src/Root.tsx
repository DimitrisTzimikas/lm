import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
/* Local Files */
import HotelCard from './components/HotelCard/HotelCard';
import RadioButtons from './components/RadioButtons';
import {HotelType} from './types/types';
import {compareBaseOnProperty} from './util/compare';

const API_ENDPOINT =
  'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507';
const options = ['name', 'price', 'stars', 'userRating'];

export default function App() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  useEffect(() => {
    loadHotels();
  }, []);

  useEffect(() => {
    setHotels((prevData: HotelType[]) => [
      ...prevData.sort(compareBaseOnProperty(selectedOption)),
    ]);
  }, [selectedOption]);

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
        <>
          <RadioButtons
            options={options}
            option={selectedOption}
            setOption={(value: string) => setSelectedOption(value)}
          />
          <FlatList
            data={hotels}
            renderItem={renderItem}
            keyExtractor={hotel => hotel.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </>
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
