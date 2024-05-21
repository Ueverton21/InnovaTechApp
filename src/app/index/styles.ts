import { primaryColor } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "bold",
    color: primaryColor,
    textAlign: "center",
  },
});
