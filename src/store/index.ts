import Vue from "vue";
import Vuex from "vuex";
import {FeathersVuex} from "@/plugins/feathers-client"

Vue.use(Vuex);
Vue.use(FeathersVuex);

const requireModule = require.context(
  "./services",
  false,
  /\.ts$/
);
const plugins = requireModule.keys().map(
  modulePath => requireModule(modulePath).default
);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [...plugins]
});
