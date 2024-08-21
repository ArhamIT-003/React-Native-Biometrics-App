import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ContactPage() {
  return (
    <View style={{ padding: 20, backgroundColor: "#f5f5f5" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
        Biometrics protected
      </Text>
      <Link
        href="/biometrics/protected"
        style={{
          fontSize: 18,
          color: "#007AFF",
          textDecorationLine: "underline",
        }}
      >
        click to visit protected route
      </Link>
    </View>
  );
}
