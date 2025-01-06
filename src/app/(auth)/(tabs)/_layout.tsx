import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/src/constants/Colors";

export default function TabLayout(): JSX.Element {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "shift",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          paddingTop: 15,
          backgroundColor: Colors.primaryBg,
          boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
        },
        tabBarShowLabel: false,
        tabBarButton: (props) => {
          return <Pressable {...props} android_ripple={null} />;
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabBarIcon
                focused={focused}
                label="Home"
                iconName={focused ? "home" : "home-outline"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabBarIcon
                focused={focused}
                label="Explore"
                iconName={focused ? "search" : "search-outline"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabBarIcon
                focused={focused}
                label="Profile"
                iconName={focused ? "person" : "person-outline"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}

const CustomTabBarIcon = ({
  focused,
  label,
  iconName,
}: {
  focused: boolean;
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
}) => {
  const size = focused ? 32 : 24;
  const iconColor = focused ? Colors.accent : Colors.disabled;
  const display = focused ? "none" : "flex";

  return (
    <View style={styles.container}>
      <Ionicons name={iconName} color={iconColor} size={size} />

      <Text style={[styles.label, { display: display }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "QuicksandMed",
    fontSize: 11,
    color: Colors.disabled,
  },
});
