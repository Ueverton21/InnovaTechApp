import { Text, View, Modal, Pressable, Image, StyleSheet } from "react-native";
import { usePeopleStore } from "../../store/people_store";
import { primaryColor } from "@/constants/Colors";
import { Info } from "../info";
import { styles } from "./styles";

type ModalPeopleProps = {
  people: People;
};

export function ModalPeople({ people }: ModalPeopleProps) {
  const people_store = usePeopleStore();

  return (
    <Modal visible={people_store.modalVisible} transparent={true}>
      <View style={styles.main}>
        <Pressable
          style={styles.pressable}
          onPress={() => people_store.setModalVisible(false)}
        ></Pressable>
        <View style={styles.content}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.box_image}>
              <Image
                source={{ uri: people.image.large }}
                height={120}
                width={120}
                borderRadius={60}
              />
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.textName}>
              {people.name.first + " " + people.name.last}
            </Text>
            <Info iconName="at-sign" text={people.email} />
            <Info iconName="user" text={people.gender} />
            <Info iconName="map-pin" text={people.address} />
            <Info iconName="calendar" text={people.dateOfBirth.split("T")[0]} />
            <Info iconName="phone" text={people.phone} />
            <Info iconName="hash" text={people.id} />
            <Info iconName="map" text={people.nat} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
