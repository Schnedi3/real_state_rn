import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";

import { Colors } from "@/src/constants/Colors";
import { icons } from "@/assets/data/icons";
import { settings } from "@/assets/data/data";

export default function Profile() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={{ uri: user.imageUrl }} style={styles.avatar} />

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={styles.name}>{user.firstName}</Text>
            <Text style={styles.name}>{user.lastName}</Text>
          </View>

          <Text style={styles.email}>
            {user.emailAddresses[0].emailAddress}
          </Text>
        </View>

        <View>
          {settings.map((item, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                styles.button,
                pressed && { opacity: 0.5 },
              ]}
            >
              <View style={styles.buttonContent}>
                <Image source={item.icon} style={styles.icon} />
                <Text style={styles.text}>{item.title}</Text>
                <Image source={icons.rightArrow} style={styles.chevron} />
              </View>
            </Pressable>
          ))}
        </View>

        <LogoutButton />
      </View>
    </ScrollView>
  );
}

const LogoutButton = () => {
  const { signOut } = useClerk();

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
      onPress={() => signOut()}
    >
      <View style={styles.buttonContent}>
        <Image source={icons.logout} style={styles.icon} />
        <Text style={styles.text}>Log Out</Text>
        <Image source={icons.rightArrow} style={styles.chevron} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    gap: 20,
    backgroundColor: Colors.secondaryBg,
  },
  card: {
    width: "80%",
    paddingVertical: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: Colors.primaryBg,
    boxShadow:
      "0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.06)",
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 100,
  },
  name: {
    fontFamily: "QuicksandBold",
    fontSize: 22,
    color: Colors.primaryText,
  },
  email: {
    fontFamily: "QuicksandMed",
    fontSize: 16,
    color: Colors.secondaryText,
  },
  // button
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: Colors.primaryBg,
  },
  buttonContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontFamily: "QuicksandSemi",
    fontSize: 17,
    color: Colors.primaryText,
    lineHeight: 20,
  },
  chevron: {
    width: 22,
    height: 22,
    marginLeft: "auto",
  },
});
