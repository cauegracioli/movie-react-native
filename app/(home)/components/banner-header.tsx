import { ThemedText } from "@/components/ThemedText";
import { View, useColorScheme } from "react-native";
import { styles } from "../styles";

interface BannerProps {
  title: string;
}

export function BannerHeader({ title }: BannerProps) {
  return (
    <View style={styles.banner}>
      <ThemedText style={styles.text}>{title}</ThemedText>
    </View>
  );
}
