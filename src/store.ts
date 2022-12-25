// import { reactive } from "vue";

// export const store = reactive({
//   messages: [] as string[],
// });
// import type { InjectionKey } from "vue";
// import { createStore, useStore as baseUseStore, Store } from "vuex";

import { createStore } from "vuex";
import axios from "axios";
export interface State {
  messages: string[];
}

// export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      messages: [],
    };
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    },
    posts(state, messages) {
      state.messages = messages;
    },
  },
  actions: {
    async posts({ commit }) {
      const messages = (await axios.get("http://localhost:3000/messages")).data;
      commit("posts", messages);
    },
    async addMessage({ commit }, message) {
      await axios.post("http://localhost:3000/messages", {
        message: message,
      });
      commit("addMessage", message);
    },
    async getMessage({ commit }, id) {
      const messages = (await axios.get(`http://localhost:3000/messages/${id}`))
        .data;
      return messages;
    },
  },
});

// define your own `useStore` composition function
// export function useStore() {
//   return baseUseStore(key);
// }
