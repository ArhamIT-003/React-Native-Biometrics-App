import React, { useEffect, useState } from "react";
import { Slot } from "expo-router";
import { authenticateAsync } from "expo-local-authentication";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ProtectedLayout() {
  const [unlocked, setUnlocked] = useState(false);

  const authenticate = async () => {
    try {
      const res = await authenticateAsync();
      console.log(res);
      if (res.success) {
        setUnlocked(true);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  if (!unlocked) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Authorize yourself to access the private page
        </Text>
        <FontAwesome5
          onPress={authenticate}
          name="hand-middle-finger"
          size={75}
          color="black"
        />
      </View>
    );
  }
  return <Slot />;
}
