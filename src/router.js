import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Item from "./views/Item.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";

Vue.use(Router); //プラグインを適応するって意味

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        header: HeaderHome,
      },
    },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    {
      path: "/item",
      components: {
        default: Item,
        header: HeaderUsers,
      },
      props: {
        default: true,
        header: false,
      },
      children: [
        { path: "profile", component: UsersProfile },
        { path: "posts", component: UsersPosts, name: "users-id-profile" },
      ],
    },
    // {
    //   //適当なURLの時はHOMEを表示させる
    //   path: "*",
    //   redirect: { path: "/" },
    // },
  ],
  scrollBehavior() {
    return {
      selector: "#next-user",
    };
    // console.log("scroll");
    // return { x: 0, y: 0 };
  },
});
