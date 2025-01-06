import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

import { Colors } from '@/src/constants/Colors';
import { HomeHeader } from '@/src/components/home/HomeHeader';

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
        <Text style={styles.title}>Home</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'QuicksandBold',
    fontSize: 60,
    color: Colors.disabled,
  },
});
