import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function DetailsScreen() {
  return (
    <ThemedView>
      <ThemedText>Details</ThemedText>
      <Link href='/'>Home</Link>
    </ThemedView>
  );
}
