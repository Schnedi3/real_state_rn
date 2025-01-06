import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/src/constants/Colors';
import { icons } from '@/assets/data/icons';

export const HomeHeader = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (text: string) => void;
}) => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* user */}
      <View style={styles.user}>
        <Image source={{ uri: user.imageUrl }} style={styles.avatar} />

        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Text style={styles.name}>{user.firstName}</Text>
          <Text style={styles.name}>{user.lastName}</Text>
        </View>

        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            marginLeft: 'auto',
          })}
        >
          <Image source={icons.bell} style={styles.bell} />
        </Pressable>
      </View>

      {/* search bar */}
      <View style={styles.searchBar}>
        <Ionicons name='search-outline' style={styles.searchIcon} />

        <TextInput
          placeholder='Search'
          placeholderTextColor={Colors.disabled}
          defaultValue={search}
          style={styles.searchInput}
          onChangeText={(text) => setSearch(text)}
        />

        {search && (
          <Pressable
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            onPress={() => setSearch('')}
          >
            <Ionicons name='close-outline' style={styles.searchIcon} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
    borderBottomWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.primaryBg,
  },
  // avatar
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontFamily: 'QuicksandBold',
    fontSize: 18,
    color: Colors.primaryText,
  },
  bell: {
    width: 25,
    height: 25,
  },
  // search
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.border,
  },
  searchIcon: {
    fontSize: 24,
    color: Colors.disabled,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'QuicksandSemi',
    fontSize: 16,
    color: Colors.primaryText,
  },
});
