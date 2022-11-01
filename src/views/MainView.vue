<template>
  <div id="main">
    <h1>Hello World</h1>
    <p>input your password here.</p>
    <input type="password" v-model="testText" />
    <button @click="send">送信する</button>
  </div>
</template>
<script>
export default {
  created: function () {},
  data() {
    return {
      testText: "入力してください",
    };
  },
  methods: {
    send: function () {
      if (this.testText == "password123") {
        this.$router.push("/test");
      }
    },
  },
};
</script>
<style>
#main {
  justify-content: center;
}
</style>