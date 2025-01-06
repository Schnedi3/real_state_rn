import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/Colors';
import { icons } from '@/assets/data/icons';
import { IFeaturedCard } from '@/src/types/types';

export const FeaturedCard = ({ item }: { item: IFeaturedCard }) => {
  return (
    <View>
      <View style={styles.ratingContainer}>
        <Image source={icons.star} style={styles.star} />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>

      <View style={styles.houseContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.title}>{item.price}</Text>
      </View>

      <Image source={item.image} style={styles.image} />
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
  houseContainer: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    zIndex: 1,
  },
  title: {
    fontFamily: 'QuicksandBold',
    fontSize: 17,
    color: Colors.invertedText,
  },
  location: {
    fontFamily: 'QuicksandMed',
    fontSize: 15,
    color: Colors.invertedText,
  },
  image: {
    width: 230,
    height: 310,
    borderRadius: 16,
    resizeMode: 'cover',
  },
});
