import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

import { Colors } from "@/src/constants/Colors";

export const LoginButton = ({
  onPress,
  iconName,
  buttonText,
}: {
  onPress: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
  buttonText: string;
}): JSX.Element => {
  return (
    <Pressable
      style={({ pressed }) => [styles.LoginButton, pressed && { opacity: 0.5 }]}
      onPress={onPress}
    >
      <View style={styles.buttonContent}>
        <Ionicons name={iconName} style={styles.LogoIcon} />
        <Text style={styles.LoginButtonText}>{buttonText}</Text>
        <FontAwesome6 name="arrow-right-long" style={styles.LogoArrow} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  LoginButton: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.border,
    backgroundColor: Colors.primaryBg,
  },
  buttonContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  LogoIcon: {
    fontSize: 24,
    color: Colors.secondaryText,
  },
  LoginButtonText: {
    fontFamily: "QuicksandSemi",
    fontSize: 17,
    color: Colors.primaryText,
  },
  LogoArrow: {
    fontSize: 20,
    color: Colors.accent,
  },
});
