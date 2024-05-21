import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PeopleService } from "../api/service/PeopleService";

interface PeopleStore {
  peoples: People[];
  peoplesFiltered: People[];
  page: number;
  loading: boolean;
  modalVisible: boolean;

  setPage: (num: number) => void;
  setLoading: (loading: boolean) => void;
  setModalVisible: (modalVisible: boolean) => void;
  populePeoples: (page: number) => Promise<void>;
  filterNamePeoples: (text: string) => void;
  filterGenrePeoples: (text: string) => void;
}

const usePeopleStore = create<PeopleStore>()((set) => ({
  peoples: [],
  peoplesFiltered: [],
  page: 1,
  loading: false,
  modalVisible: false,
  setPage: (num: number) => set({ page: num }),
  setLoading: (loading: boolean) => set({ loading: loading }),
  setModalVisible: (modalVisible: boolean) =>
    set({ modalVisible: modalVisible }),

  populePeoples: async (page: number) => {
    const peopleService = new PeopleService();
    const storagePeoples = await AsyncStorage.getItem("@peoples");

    set((state) => {
      /*verifica se o storage já tem a listagem de pessoas e se a lista está 
      vazia, se tiver passa o valor para o estado e não chama a API.
      */
      if (storagePeoples != null && !(state.peoples.length > 0)) {
        const listPeoples: People[] = JSON.parse(storagePeoples);

        return { peoples: listPeoples, peoplesFiltered: listPeoples };
      }
      //Se a lista tiver vazia irá salvar no storage as primeiras 20 pessoas
      if (state.peoples.length == 0) {
        peopleService.getPeoples(page).then((peoples) => {
          AsyncStorage.setItem("@peoples", JSON.stringify(peoples));
          return { peoples: peoples, peoplesFiltered: peoples };
        });
      }

      //No último caso é pra carregar mais 20 pessoas
      peopleService.getPeoples(page).then((peoples) => {
        const newPeoplesAtualized = state.peoples;

        peoples.map((p) => {
          newPeoplesAtualized.push(p);
        });
        return {
          peoples: newPeoplesAtualized,
          peoplesFiltered: newPeoplesAtualized,
        };
      });
      return {};
    });
  },
  filterNamePeoples: (text: string) => {
    if (text == "") {
      set((state) => {
        return { peoplesFiltered: state.peoples };
      });
    } else {
      set((state) => {
        const newPeoples = state.peoplesFiltered.filter(
          (p) => p.name.first.includes(text) || p.name.last.includes(text)
        );
        return { peoplesFiltered: newPeoples };
      });
    }
  },
  filterGenrePeoples: (text: string) => {
    set((state) => {
      if (text != "all") {
        const newPeoples = state.peoplesFiltered.filter(
          (p) => p.gender == text
        );
        return { peoplesFiltered: newPeoples };
      }
      return { peoplesFiltered: state.peoples };
    });
  },
}));

export { usePeopleStore };
