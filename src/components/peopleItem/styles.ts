import { primaryColor } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    flexDirection: "row",
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
    borderColor: primaryColor,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 8,
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: primaryColor,
    letterSpacing: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textFooter: {
    fontSize: 16,
    color: "#999",
    fontWeight: "500",
  },
});
