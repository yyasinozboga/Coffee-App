import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CoffeeType} from '../../types';
import Plus from '../../../assets/icons/Plus';
import LinearGradient from 'react-native-linear-gradient';
import Star from '../../../assets/icons/Star';

const Card = ({coffee}: {coffee: CoffeeType}) => {
  const {_id, category, image, name, rating, price} = coffee;

  return (
    <Pressable style={styles.card}>
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={['#111111', '#313131']}
          locations={[0, 1]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.rating}>
          <Star width={12} height={12} />
          <Text style={styles.avarage}>{rating.average}</Text>
        </LinearGradient>
        <Image source={{uri: image}} style={styles.image} />
      </View>

      <View style={styles.detail}>
        <View style={styles.text}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text style={styles.category}>{category}</Text>
        </View>

        <View style={styles.buttons}>
          <Text style={styles.price}>${price}</Text>
          <Pressable>
            <Plus />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    gap: 8,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: 'white',
    borderRadius: 16,
    width: 156,
    height: 238,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    width: 140,
    height: 128,
    position: 'relative',
  },

  image: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  detail: {
    width: 140,
    gap: 8,
  },

  text: {
    gap: 4,
    alignItems: 'flex-start',
  },

  name: {
    fontSize: 16,
    fontFamily: 'Sora',
    color: '#242424',
  },

  category: {
    fontFamily: 'Sora',
    fontSize: 12,
    color: '#A2A2A2',
  },

  buttons: {
    flexDirection: 'row',
    gap: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  price: {
    fontSize: 18,
    fontFamily: 'Sora',
    color: '#050505',
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    gap: 4,
    width: 51,
    height: 28,
    borderTopEndRadius: 12,
    borderBottomStartRadius: 50,
    zIndex: 1,
    justifyContent: 'center',
  },

  avarage: {
    fontFamily: 'Sora',
    fontSize: 8,
    color: 'white',
  },
});
