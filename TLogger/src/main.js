import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase, { app } from "firebase";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from "bootstrap-vue";
import "firebase/firestore";
import VueFire from "vuefire";
//import Vuetify from "vuetify";
//import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueFire);
//Vue.use(Vuetify);

var config = {
  apiKey: "AIzaSyDzPOcZzHWDJnJnnM-fEQUkxNxKa1sBDD0",
  authDomain: "logintest-b3422.firebaseapp.com",
  databaseURL: "https://logintest-b3422.firebaseio.com",
  projectId: "logintest-b3422",
  storageBucket: "logintest-b3422.appspot.com",
  messagingSenderId: "365749727057"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

export const db = firebase.firestore();
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
