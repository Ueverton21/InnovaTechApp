import { primaryColor, textPrimaryColor } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
    borderColor: primaryColor,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: textPrimaryColor,
    fontSize: 16,
  },
});
