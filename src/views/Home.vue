<template>
  <div>
    <!-- <h2>Home page</h2>
    <button @click="toAbout">about ページにいく</button> -->
    <div class="image_container">
      <img class="home_img" src="../assets/top.jpg" alt="top image" />
      <div class="title">MAKE YOU SUMMER SALE</div>
    </div>
    <div class="home">
      <div>こんにちは make youです</div>
      <div>
        私たちは、商品包装でプラスチック製のものの使用をやめ、紙製での包装を行っております。
        また、商品の一部代金を環境保全団体に募金いたします。
      </div>
    </div>
    <Item></Item>
  </div>
</template>

<script>
export default {
  methods: {
    toAbout() {
      this.$router.push("/about");
    },
    data() {
      return {
        image_src: "../assets/top.jpg",
      };
    },
  },
};
</script>

<style scoped>
.image_container {
  position: relative;
}
.home_img {
  width: 100%;
  height: auto;
}
.title {
  position: absolute;
  color: black; /*文字は白に*/
  top: 50%;
  left: 50%;
  font-size: 40px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  letter-spacing: 0.2rem;
}
.home {
  padding: 20px;
  letter-spacing: 0.3rem;
}
</style>
