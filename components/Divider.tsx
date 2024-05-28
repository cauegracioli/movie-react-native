import { StyleSheet, View } from "react-native";

type Orientation = "horizontal" | "vertical";

interface DividerProps {
  orientation?: Orientation;
}

export function Divider({ orientation = "horizontal" }: DividerProps) {
  return (
    <View
      style={{
        ...styles.divider,
        height: orientation === "horizontal" ? 1 : 0,
        width: orientation === "vertical" ? 1 : 0,
      }}
    ></View>
  );
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "gray",
    opacity: 0.3,
  },
});
