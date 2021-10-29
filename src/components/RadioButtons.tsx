import {StyleSheet, View} from 'react-native';
import React from 'react';
// @ts-ignore This error emerge because library is written in js and not ts
import {SegmentedControls} from 'react-native-radio-buttons';

const RadioButtons = ({
  options,
  option,
  setOption,
}: {
  options: string[];
  option: any;
  setOption: any;
}) => {
  return (
    <View style={styles.radioButtons}>
      <SegmentedControls
        tint={'#8F754F'}
        options={options}
        onSelection={setOption}
        selectedOption={option}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtons: {
    margin: 5,
  },
});

export default RadioButtons;
