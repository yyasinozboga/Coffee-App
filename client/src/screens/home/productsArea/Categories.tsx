import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

type Props = {
  setSelected: any;
  selected: string;
  value: string;
  label: string;
};

const CreateCategoryItem = ({selected, setSelected, value, label}: Props) => {
  const isSelected = selected === value;
  const bgColor = isSelected ? '#C67C4E' : '#EDEDED';
  const color = isSelected ? 'white' : '#313131';

  return (
    <Pressable
      onPress={() => setSelected(value)}
      style={[styles.category, {backgroundColor: bgColor}]}>
      <Text style={[styles.categoryText, {color: color}]}>{label}</Text>
    </Pressable>
  );
};

const Categories = () => {
  const [selected, setSelected] = useState('');

  const categories = [
    {value: '', label: 'All Coffee'},
    {value: 'Machiato', label: 'Machiato'},
    {value: 'Latte', label: 'Latte'},
    {value: 'Americano', label: 'Americano'},
    {value: 'Espresso', label: 'Espresso'},
  ];

  return (
    <View>
      <FlatList
        data={categories}
        contentContainerStyle={{gap: 16}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <CreateCategoryItem
            setSelected={setSelected}
            selected={selected}
            {...item}
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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    width: 87,
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryText: {
    fontSize: 14,
    fontFamily: 'Sora',
  },
});
