<template>
  <div id="app">
    <nav class="navigations">
      <router-link
        to="/"
        exact
        active-class="link--active"
        tag="div"
        class="nav"
        >Home</router-link
      >
      <router-link
        to="/item"
        exact
        active-class="link--active"
        tag="div"
        class="nav"
        >Item</router-link
      >
      <router-link
        to="/about"
        tag="div"
        exact
        active-class="link--active"
        class="nav"
        >About</router-link
      >
      <router-link
        to="/contact"
        tag="div"
        exact
        active-class="link--active"
        class="nav"
        >Contact</router-link
      >
    </nav>
    <!-- <router-view name="header"></router-view> -->
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>
    <!-- <Header></Header> -->
    <Footer></Footer>
    <!-- Headerはグローバル登録 -->
  </div>
</template>

<script>
import Footer from "./components/Footer"; //ローカル登録
// import Order from "./components/Order";
export default {
  components: {
    Footer,
    // Order,
  },
  methods: {
    beforeEnter() {},
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.navigations {
  cursor: pointer;
  margin: 10px;
  display: flex;
  justify-content: flex-end;
}

.nav {
  margin: 10px;
}

.link--active {
  font-size: 20px;
}
</style>
