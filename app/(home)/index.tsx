import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ padding: 25 }}>
      <ThemedText>Hello World</ThemedText>
    </View>
  );
}
