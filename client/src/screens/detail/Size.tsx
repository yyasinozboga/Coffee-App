import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import normalize from '../../utils/helper';

type Props = {
  item: string;
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
};

const SizeButton = ({item, selected, setSelected}: Props) => {
  const isSelected = selected === item;
  const bgColor = isSelected ? '#F9F2ED' : 'white';
  const borderColor = isSelected ? '#C67C4E' : '#E3E3E3';
  const color = isSelected ? '#C67C4E' : '#242424';

  return (
    <Pressable
      key={item}
      style={[
        styles.size,
        {backgroundColor: bgColor, borderColor: borderColor},
      ]}
      onPress={() => setSelected(item)}>
      <Text style={[styles.sizeText, {color: color}]}>{item}</Text>
    </Pressable>
  );
};

const Size = ({size}: {size: string[]}) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Size</Text>

      <View style={styles.sizeContainer}>
        {size.map(item => (
          <SizeButton
            key={item}
            item={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </View>
    </View>
  );
};

export default Size;

const styles = StyleSheet.create({
  container: {
    width: normalize(320),
    height: normalize(81),
    gap: normalize(16),
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    top: normalize(589),
    left: normalize(24),
  },

  title: {
    fontFamily: 'Sora',
    fontSize: normalize(16),
    fontWeight: 'semibold',
    color: '#242424',
  },

  sizeContainer: {
    gap: normalize(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  size: {
    flexDirection: 'row',
    gap: normalize(10),
    width: normalize(96),
    height: normalize(41),
    borderRadius: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },

  sizeText: {
    fontFamily: 'Sora',
    fontSize: normalize(14),
    fontWeight: 'regular',
  },
});
