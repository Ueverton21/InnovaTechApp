import { primaryColor, textPrimaryColor } from "@/constants/Colors";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

export function Search({ ...rest }: TextInputProps) {
  return (
    <View style={styles.main}>
      <TextInput style={styles.input} {...rest} />
      <FontAwesome name="user" size={24} color={primaryColor} />
    </View>
  );
}
