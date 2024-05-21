import { primaryColor, textPrimaryColor } from "@/constants/Colors";
import { Feather, FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  PressableProps,
} from "react-native";

import { styles } from "./styles";

type PeopleItemProps = PressableProps & {
  people: People;
};

export function PeopleItem({ people, ...rest }: PeopleItemProps) {
  return (
    <Pressable style={styles.main} {...rest}>
      <Image
        source={{ uri: people.image.medium }}
        height={72}
        width={72}
        borderRadius={36}
      />
      <View style={styles.info}>
        <Text style={styles.name}>
          {people.name.first + " "}
          {people.name.last}{" "}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>{people.gender}</Text>
          <Text style={styles.textFooter}>
            {people.dateOfBirth.split("T")[0]}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
