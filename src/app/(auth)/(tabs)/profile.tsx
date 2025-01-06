import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { Colors } from "@/src/constants/Colors";

export default function Profile() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: user.imageUrl }} style={styles.avatar} />

        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={styles.name}>{user.firstName}</Text>
          <Text style={styles.name}>{user.lastName}</Text>
        </View>

        <Text style={styles.email}>{user.emailAddresses[0].emailAddress}</Text>
      </View>

      <LogoutButton />
    </View>
  );
}

const LogoutButton = () => {
  const { signOut } = useClerk();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.logoutButton,
        pressed && { opacity: 0.5 },
      ]}
      onPress={() => signOut()}
    >
      <View style={styles.buttonContent}>
        <AntDesign name="logout" style={styles.icon} />
        <Text style={styles.LogoutText}>Log Out</Text>
        <Ionicons name="chevron-forward" style={styles.chevron} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: Colors.secondaryBg,
  },
  card: {
    width: "80%",
    marginTop: 60,
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
  // log out button
  logoutButton: {
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
    fontSize: 20,
    color: Colors.secondaryText,
  },
  LogoutText: {
    fontFamily: "QuicksandSemi",
    fontSize: 17,
    color: Colors.primaryText,
    lineHeight: 20,
  },
  chevron: {
    marginLeft: "auto",
    fontSize: 20,
    color: Colors.accent,
  },
});
