<template>
  <diV>
    <p class="contact_title">お問い合わせフォーム</p>

    <diV>
      <input type="radio" id="men" value="men" v-model="eventData.sex" />
      <label for="contact">男</label>
      <input type="radio" id="women" value="women" v-model="eventData.sex" />
      <label for="contact">女</label>
      <input type="radio" id="non" value="non" v-model="eventData.sex" />
      <label for="contact">答えたくない</label>

      <p>{{eventData.sex}}</p>
    </diV>

    <div>
      <label for="email">メールアドレス</label>
      <input type="email" id="email" v-model.lazy="eventData.email" />
      <p>{{eventData.email}}</p>
    </div>

    <div>
      <label for="contact">お問い合わせ内容</label>
      <textarea id="contact" cols="30" rows="10"></textarea>
    </div>

    <button @click="submithandle">お問い合わせ内容を送信</button>
  </diV>
</template>    

<script>
export default {
  data() {
    return {
      eventData: {
        sex: "",
        email: ""
      }
    };
  },
  methods: {
    submithandle() {
      alert("お問い合わせありがとうございました");
    }
  }
};
</script>  


<style scoped>
.contact_title {
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid #000;
  margin: 20px auto;
  height: 30px;
  width: 250px;
}
</style>