import React from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';

const ImageList = ({photos}: {photos: string[]}) => {
  const renderItem = ({item}: {item: string}) => {
    return <Image style={styles.logo} source={{uri: item}} />;
  };

  return (
    <FlatList
      data={photos}
      renderItem={renderItem}
      keyExtractor={(item: string, index: number) => `${index}-${item}`}
      showsVerticalScrollIndicator={false}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,

    borderRadius: 8,
    margin: 10,
  },
});

export default ImageList;
