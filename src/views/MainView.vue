<template>
  <div id="main">
    <h1>Hello World</h1>
    <p>input your data here.</p>
    <input type="text" v-model="testText" />
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
      console.log(this.testText);
    },
  },
};
</script>
<style>
#main {
  justify-content: center;
}
</style>