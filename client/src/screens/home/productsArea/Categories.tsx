import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import normalize from '../../../utils/helper';

type Props = {
  setSelected: any;
  selected: string;
  value: string;
  label: string;
  onPress: (params: {category: string}) => void;
};

const CreateCategoryItem = ({
  selected,
  setSelected,
  value,
  label,
  onPress,
}: Props) => {
  const isSelected = selected === value;
  const bgColor = isSelected ? '#C67C4E' : '#EDEDED';
  const color = isSelected ? 'white' : '#313131';

  const handlePress = () => {
    setSelected(value);
    onPress({category: value});
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.category, {backgroundColor: bgColor}]}>
      <Text style={[styles.categoryText, {color: color}]}>{label}</Text>
    </Pressable>
  );
};

const Categories = ({
  mutate,
}: {
  mutate: (params: {category: string}) => void;
}) => {
  const [selected, setSelected] = useState('');

  const categories = [
    {value: '', label: 'All Coffee'},
    {value: 'Macchiato', label: 'Machiato'},
    {value: 'Latte', label: 'Latte'},
    {value: 'Americano', label: 'Americano'},
    {value: 'Espresso', label: 'Espresso'},
  ];

  return (
    <View>
      <FlatList
        data={categories}
        contentContainerStyle={{gap: normalize(16)}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <CreateCategoryItem
            setSelected={setSelected}
            selected={selected}
            {...item}
            onPress={mutate}
          />
        )}
        keyExtractor={item => item.value}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(4),
    borderRadius: normalize(6),
    width: normalize(87),
    height: normalize(29),
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryText: {
    fontSize: normalize(14),
    fontFamily: 'Sora',
  },
});
