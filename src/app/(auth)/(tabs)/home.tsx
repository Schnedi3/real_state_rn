import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

import { Colors } from '@/src/constants/Colors';
import { HomeHeader } from '@/src/components/home/HomeHeader';
import { featuredCards } from '@/assets/data/data';
import { FeaturedCard } from '@/src/components/home/FeaturedCard';

export default function Home(): JSX.Element {
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <HomeHeader search={search} setSearch={setSearch} />,
        }}
      />

      <View style={styles.container}>
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
        <View>
          <Text style={styles.title}>Recommended</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 25,
  },
  title: {
    fontFamily: 'QuicksandBold',
    fontSize: 24,
    color: Colors.primaryText,
  },
});
