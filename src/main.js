import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import router from "./router";
import About from "./views/About.vue";
import Item from "./views/Item.vue";

Vue.config.productionTip = false;
Vue.component("Header", Header);
Vue.component("Footer", Footer);
Vue.component("About", About);
Vue.component("Item", Item);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
