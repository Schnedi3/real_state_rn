import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/src/constants/Colors";

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "QuicksandBold",
    fontSize: 60,
    color: Colors.disabled,
  },
});
