import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
} from "react-native";
import { primaryColor, textPrimaryColor } from "@/constants/Colors";
import { Search } from "../../components/search/search";
import { Feather } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { PeopleItem } from "../../components/peopleItem";
import { usePeopleStore } from "../../store/people_store";
import { Picker } from "@react-native-picker/picker";
import { ModalPeople } from "../../components/modal";

import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Index() {
  //hook com os estados globais
  const people_store = usePeopleStore();

  const [genreFilter, setGenreFilter] = useState("");
  const [visibleGenreFilter, setVisibleGenreFilter] = useState(false);
  const [peopleSelected, setPeopleSelected] = useState<People>();

  useEffect(() => {
    loadingPeoples();
  }, [people_store.page]);

  function changeText(text: string) {
    if (text == "") {
      setGenreFilter("all");
    }
    people_store.filterNamePeoples(text);
  }

  async function loadingPeoples() {
    await people_store.populePeoples(people_store.page);
    people_store.setLoading(false);
  }

  return (
    <View style={styles.main}>
      {peopleSelected != undefined && <ModalPeople people={peopleSelected!} />}
      <Text style={styles.title}>Innovate Tech</Text>
      <View style={styles.header}>
        <Search
          placeholder="Busca..."
          placeholderTextColor={"#666"}
          onChangeText={changeText}
        />
        <TouchableOpacity onPress={() => setVisibleGenreFilter(true)}>
          <Feather name="filter" size={34} color={primaryColor} />
        </TouchableOpacity>
      </View>
      {visibleGenreFilter && (
        <Picker
          selectedValue={genreFilter}
          onValueChange={(itemValue) => {
            setGenreFilter(itemValue.toString());
            setVisibleGenreFilter(false);
            people_store.filterGenrePeoples(itemValue.toString());
          }}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Male" value="male" />
        </Picker>
      )}
      <FlatList
        style={{ marginTop: 10 }}
        data={people_store.peoplesFiltered}
        renderItem={({ item }) => (
          <PeopleItem
            onPress={() => {
              people_store.setModalVisible(true);
              setPeopleSelected(item);
            }}
            key={item.id}
            people={item}
          />
        )}
        onEndReached={() => {
          //Regra para evitar novo carregamento quando a lista tiver filtrada
          if (
            people_store.peoplesFiltered.length == people_store.peoples.length
          ) {
            people_store.setLoading(true);
            /*Como a consulta na API é bem rápida, coloquei esse 
            timeout só pra dar tempo de visualizar o loading*/
            setTimeout(() => {
              people_store.setPage(people_store.page + 1);
            }, 1500);
          }
        }}
      />
      {people_store.loading && (
        <>
          <ActivityIndicator size={"small"} color={primaryColor} />
          <Text
            style={{
              textAlign: "center",
              color: primaryColor,
              fontWeight: "bold",
            }}
          >
            Carregando mais
          </Text>
        </>
      )}
    </View>
  );
}
