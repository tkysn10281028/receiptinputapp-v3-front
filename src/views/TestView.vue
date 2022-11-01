<template>
  <div id="test">
    <h2>Hello, This is Test Page</h2>
    <input type="text" v-model="testTextForSearch" />
    <button @click="searchByWord">search By Word</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testTextForSearch: "",
    };
  },
  methods: {
    searchByWord: function () {
      const url = location.origin + "/api/v1/getResultBySearchWord";
      const params = new URLSearchParams();
      params.append("searchWord", this.testTextForSearch);
      this.axios
        .post(url, params, this.serverPass + "login")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>