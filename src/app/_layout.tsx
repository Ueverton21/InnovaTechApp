import { SafeAreaView, Platform } from "react-native";
import { Slot } from "expo-router";
import { white } from "@/constants/Colors";

export default function Layout() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: white,
        paddingTop: Platform.OS == "android" ? 28 : 0,
      }}
    >
      <Slot />
    </SafeAreaView>
  );
}
