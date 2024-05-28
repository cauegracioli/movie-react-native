import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { SafeAreaView, useColorScheme } from "react-native";

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerStyle: {
          backgroundColor: "#FFBA38",
        },
        headerTintColor: "#303030",
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          href: null,
          title: "Track Movies",
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />
    </Tabs>
  );
}
