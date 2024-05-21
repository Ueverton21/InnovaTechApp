import { primaryColor } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

import { styles } from "./styles";

type InfoProps = {
  iconName: keyof typeof Feather.glyphMap;
  text: string;
};

export function Info({ iconName, text }: InfoProps) {
  return (
    <View style={styles.line_info}>
      <Feather name={iconName} size={18} color={primaryColor} />
      <Text style={styles.text_default}>{text}</Text>
    </View>
  );
}
