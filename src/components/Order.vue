<template>
  <div>
    <div class="order_container">商品を注文する</div>

    <div>
      <input type="checkbox" id="product" />
      <label for="product">Girl Surf T-shirt</label>
      <div>
        <input type="checkbox" id="size" />
        <label for="size">M</label>
        <input type="checkbox" id="size" />
        <label for="size">L</label>
        <input type="checkbox" id="size" />
        <label for="size">XL</label>
      </div>
      <input type="checkbox" id="product" />
      <label for="product">Original Steker</label>
      <input type="checkbox" id="product" />
      <label for="product">Iphone case</label>
    </div>

    <button @click="eventHandler">住所入力へすすむ</button>

    <Contact></Contact>

    <!-- lazy で入力してエンター、スペースなどのキーを押したりした後に何かを表示させる -->
    <!-- <diV>
      <label for="order">オーダー商品</label>
      <input id="order" type="number" v-model.lazy="eventData.title" />
      <p>{{ eventData.title }}</p>
    </diV>-->

    <!-- numberをつけることで、typeをずっとnumberにできる -->
    <!-- <diV>
      <label for="maxNumber">オーダー数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber" />
      <p>タイプ : {{ typeof eventData.maxNumber }}</p>
    </diV>-->

    <!-- trim で頭とお尻の空白を消す -->
    <!-- <diV>
      <label for="host">主催者</label>
      <input id="host" type="host" v-model.trim="eventData.host" />
      <p>{{ eventData.host }}</p>
    </diV>-->

    <!-- <div>
      <input type="checkbox" id="product1" value="sirfgirl" v-model="eventData.pruduct" />
      <label for="isPrivete">Girl surf Tshirt</label>
      <input type="checkbox" id="product2" value="steker" v-model="eventData.pruduct" />
      <label for="isPrivete">steker</label>
      <input type="checkbox" id="product3" value="case" v-model="eventData.pruduct" />
      <label for="isPrivete">iphone case</label>

      <p>現在選択されているのは {{eventData.pruduct}} です</p>
    </div>-->

    <!-- <diV>
      <label for="contact">お問い合わせ内容</label>
      <textarea id="contact" cols="30" rows="10" v-model="eventData.contact"></textarea>
    </diV>

    <p>場所</p>
    <select v-model="eventData.location" multiple>
      <option v-for="location in locations" :key="location">{{location}}</option>
    </select>
    <p>{{eventData.location}}</p>-->
  </div>
</template>

<script>
import Contact from "./Contact";
export default {
  data() {
    return {
      locations: ["東京", "大阪", "沖縄"],
      eventData: {
        order: ["Girl surf Tshirt", "steker", "iphone case"],
        maxNumber: 0,
        host: "",
        contact: "",
        pruduct: [],
        sex: "",
        location: []
      }
    };
  },
  components: {
    Contact
  },
  methods: {
    eventHandler() {
      alert("ページ遷移");
    }
  }
};
</script>

<style scoped>
.order_container {
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid #000;
  margin: 10px auto;
  height: 30px;
  width: 150px;
}
</style>
