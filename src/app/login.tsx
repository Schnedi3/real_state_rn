import { Image, StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";
import { useOAuth } from "@clerk/clerk-expo";
import Animated, { FadeInDown } from "react-native-reanimated";

import { useWarmUpBrowser } from "@/src/hooks/useWarmUpBrowser";
import { LoginButton } from "@/src/components/LoginButton";
import { Colors } from "@/src/constants/Colors";

enum Strategy {
  Google = "oauth_google",
  Apple = "oauth_apple",
}

export default function Login(): JSX.Element {
  useWarmUpBrowser();
  const { startOAuthFlow: googleAuth } = useOAuth({
    strategy: Strategy.Google,
  });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: Strategy.Apple });

  const handleLogin = async (social: Strategy) => {
    const selectedStrategy = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
    }[social];

    try {
      const { createdSessionId, setActive } = await selectedStrategy({
        redirectUrl: Linking.createURL("/login", { scheme: "myapp" }),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/onboarding.png")}
        style={styles.onBoarding}
      />

      <Animated.View
        style={styles.buttonContainer}
        entering={FadeInDown.springify().delay(200)}
      >
        <Text style={styles.welcome}>
          Let's Get You Closer To{" "}
          <Text style={{ color: Colors.accent }}>Your Ideal Home</Text>
        </Text>

        <LoginButton
          onPress={() => handleLogin(Strategy.Google)}
          iconName="logo-google"
          buttonText="Continue with Google"
        />

        <LoginButton
          onPress={() => handleLogin(Strategy.Apple)}
          iconName="logo-apple"
          buttonText="Continue with Apple"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryBg,
  },
  onBoarding: {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 120,
    resizeMode: "contain",
  },
  welcome: {
    marginBottom: 30,
    fontFamily: "QuicksandBold",
    fontSize: 40,
    textAlign: "center",
    color: Colors.primaryText,
  },
  buttonContainer: {
    width: "90%",
    top: 20,
    alignSelf: "center",
    marginTop: "auto",
    paddingVertical: 110,
    gap: 10,
    zIndex: 10,
  },
});
