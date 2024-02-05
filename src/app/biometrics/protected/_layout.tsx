import React, { useEffect, useState } from "react";
import { Slot } from "expo-router";
import { authenticateAsync } from "expo-local-authentication";
import { Text } from "react-native";

export default function ProtectedLayout() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
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

    authenticate();
  }, []);

  if (!unlocked) {
    return <Text>Authorize yourself to access the private page</Text>;
  }
  return <Slot />;
}
