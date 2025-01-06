import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/Colors';
import { icons } from '@/assets/data/icons';
import { IFeaturedCard } from '@/src/types/types';

const { width } = Dimensions.get('window');

export const HouseCard = ({ item }: { item: IFeaturedCard }): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: Colors.primaryBg,
        borderRadius: 16,
        boxShadow:
          '0px 3px 4px -1px rgba(0, 0, 0, 0.1), 0px 2px 3px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <View style={styles.ratingContainer}>
        <Image source={icons.star} style={styles.star} />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>

      <Image source={item.image} style={styles.image} />

      <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.title}>{item.price}</Text>

        <Image source={icons.heart} style={styles.heart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 20,
    backgroundColor: Colors.primaryBg,
    zIndex: 1,
  },
  star: {
    width: 16,
    height: 16,
  },
  rating: {
    fontFamily: 'QuicksandSemi',
    color: Colors.primaryText,
    lineHeight: 18,
  },
  title: {
    fontFamily: 'QuicksandBold',
    fontSize: 17,
    color: Colors.primaryText,
  },
  location: {
    fontFamily: 'QuicksandMed',
    fontSize: 15,
    color: Colors.primaryText,
  },
  image: {
    width: width / 2 - 30,
    height: width / 2 - 30,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  heart: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    bottom: 8,
    width: 20,
    height: 20,
    tintColor: Colors.primaryText,
  },
});
