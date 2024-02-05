import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ContactPage() {
  return (
    <View>
      <Text>Biometrics protected</Text>
      <Link href="/biometrics/protected">click to visit protected route</Link>
    </View>
  );
}
