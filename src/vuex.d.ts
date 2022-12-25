import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // our own store store state
  interface State {
    messages: string[];
    token: string;
  }

  // provide typings for `this.$store
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
