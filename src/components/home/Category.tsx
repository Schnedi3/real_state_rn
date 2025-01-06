import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/Colors';

export const Category = ({
  item,
  selectedCategory,
  setSelectedCategory,
}: {
  item: string;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}): JSX.Element => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.category,
        pressed && { opacity: 0.5 },
        {
          backgroundColor:
            item === selectedCategory ? Colors.accent : Colors.primaryBg,
        },
      ]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text
        style={[
          styles.categoryText,
          {
            color:
              item === selectedCategory
                ? Colors.invertedText
                : Colors.primaryText,
          },
        ]}
      >
        {item}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.border,
  },
  categoryText: {
    fontFamily: 'QuicksandMed',
    fontSize: 14,
    lineHeight: 16,
    textTransform: 'capitalize',
  },
});
