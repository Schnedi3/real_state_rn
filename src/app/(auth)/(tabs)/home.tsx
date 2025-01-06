import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

import { Colors } from '@/src/constants/Colors';
import { HomeHeader } from '@/src/components/home/HomeHeader';
import { houseCards, featuredCards } from '@/assets/data/data';
import { FeaturedCard } from '@/src/components/home/FeaturedCard';
import { categories } from '@/assets/data/data';
import { Category } from '@/src/components/home/Category';
import { HouseCard } from '@/src/components/home/HouseCard';

export default function Home(): JSX.Element {
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <HomeHeader search={search} setSearch={setSearch} />,
        }}
      />

      <FlatList
        data={houseCards}
        renderItem={({ item }) => <HouseCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ gap: 20, padding: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={{ gap: 20 }}>
            {/* featured */}
            <View style={{ gap: 10 }}>
              <Text style={styles.title}>Featured</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={featuredCards}
                renderItem={({ item }) => <FeaturedCard item={item} />}
                contentContainerStyle={{ gap: 20 }}
              />
            </View>

            {/* recommended */}
            <View style={{ gap: 10 }}>
              <Text style={styles.title}>Recommended</Text>

              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => (
                  <Category
                    item={item}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                )}
                contentContainerStyle={{ gap: 20 }}
              />
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'QuicksandBold',
    fontSize: 24,
    color: Colors.primaryText,
  },
});
