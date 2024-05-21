import { primaryColor } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  pressable: {
    backgroundColor: "rgba(0,0,0,.2)",
    height: 280,
  },
  content: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  box_image: {
    marginTop: -60,
    height: 132,
    width: 132,
    borderRadius: 66,
    backgroundColor: primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textName: {
    textAlign: "center",
    color: primaryColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  line_info: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  text_default: {
    fontSize: 14,
    color: "#999",
    marginLeft: 4,
    fontWeight: "bold",
  },
});
