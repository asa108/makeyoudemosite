import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.component("Header", Header);
Vue.component("Footer", Footer);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
