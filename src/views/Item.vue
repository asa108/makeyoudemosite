<template>
  <div>
    <div class="title_container">
      <p class="title">商品一覧</p>
    </div>
    <div class="container">
      <div v-for="item in items" :key="item.name" class="items">
        <div class="nameprice_container">
          <div class="item item_name">{{ item.name }}</div>
          <div class="item item_price">${{ item.price }}</div>
        </div>
        <img class="item_img" :src="item.image" alt="画像" />
        <div class="item item_descriprion">{{ item.descriprion }}</div>
      </div>
    </div>
  </div>
  <!-- <h1>User No {{ $route.params.id }}</h1> -->

  <!-- <router-link :to="'/users/' + (Number(id) + 1) + '/profile'"
      >次のアイテムをみる</router-link
    > -->
  <!-- <router-link
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 } }"
      >次のアイテム</router-link
    > -->
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      items: [
        {
          id: 0,
          name: "Girl Surf",
          price: 30,
          descriprion:
            "This is what you've been waiting for!! Comfy and amazing Tshirts",
          image: require("../assets/black_moon.jpg"),
        },
        {
          id: 1,
          name: "Boy Surf",
          price: 30,
          descriprion:
            "This is what you've been waiting for!! Comfy and amazing Tshirts",
          image: require("../assets/black_sun.jpg"),
        },
        {
          id: 2,
          name: "Original Steaker",
          price: 5,
          descriprion:
            "makeyou original steaker you can't find it anywhere else",
          image: require("../assets/black_sun.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.container {
  display: flex;
}

.title_container {
  border-bottom: 2px solid #000;
  text-align: center;
  width: 20%;
  margin: 0 auto;
}
.title {
  font-size: 20px;
}

.items {
  padding: 30px;
}

.item {
  padding: 5px 0 5px 0;
}

.item_name {
  text-align: center;
}

.item_price {
  text-align: right;
  padding-right: 40px;
}

.item_descriprion {
  text-align: left;
}
.item_img {
  width: 100%;
  height: auto;
}

.nameprice_container {
  display: flex;
  justify-content: space-between;
}

.item_title {
  font-size: 20px;
  text-align: center;
  height: 30px;
  width: 150px;
  border-bottom: 1px solid #000;
  margin: 10px auto;
  padding-bottom: 10px;
}
</style>
