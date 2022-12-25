// import { reactive } from "vue";

// export const store = reactive({
//   messages: [] as string[],
// });
// import type { InjectionKey } from "vue";
// import { createStore, useStore as baseUseStore, Store } from "vuex";

import { createStore } from "vuex";
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
});

// define your own `useStore` composition function
// export function useStore() {
//   return baseUseStore(key);
// }
