<template>
  <!-- グローバル登録のコンポーネント -->
  <div id="app">
    <div class="container">
      <p class="title">make you</p>

      <div class="options">
        <div class="option"></div>
        <a href="blogUrl" class="option">商品一覧</a>
        <div class="option">ブログ</div>
        <div class="option">お問い合わせ</div>
        <div class="option">ENGLISH</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Blog from "./Blog";
// import Contact from "./Contact";
export default {
  // components: {
  //   Blog,
  //   Contact
  // },
  data() {
    return {
      itemUrl: "",
      blogUrl: "https://www.google.com/",
      contactUrl: "",
      currentComponent: "Home"
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
}

.title {
  margin: auto 5px;
}

.options {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.option {
  margin: auto 10px;
  cursor: pointer;
  text-decoration: none;
  color: black;
}
</style>
