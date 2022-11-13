<template>
  <div id="main-view">
    <h2>Hello, This is Test Page</h2>
    <p>emailaddress:<input type="text" v-model="emailaddress" /></p>
    <p>password:<input type="password" v-model="password" /></p>
    <button @click="login">Login!</button><br />
    <button @click="logout">Logout</button><br />
    <input type="text" v-model="searchWord" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailaddress: "",
      password: "",
      searchWord: "",
      token: "",
    };
  },
  methods: {
    login: function () {
      const url = location.origin + "/";
      const params = new URLSearchParams();
      params.append("emailaddress", this.emailaddress);
      params.append("password", this.password);
      this.axios
        .post(url, params, this.serverPass + "login")
        .then((response) => {
          console.log(response);
          this.token = response.headers.authorization;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout: function () {
      const url = location.origin + "/api/v1/deleteTokenIdForLogOut";
      const params = new URLSearchParams();
      console.log(this.token);
      this.axios
        .post(
          url,
          params,
          {
            headers: {
              Authorization: this.token,
            },
          },
          this.serverPass + "login"
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search: function () {
      const url = location.origin + "/api/v1/getResultBySearchWord";
      const params = new URLSearchParams();
      console.log(this.token);
      params.append("searchWord", this.searchWord);
      this.axios
        .post(
          url,
          params,
          {
            headers: {
              Authorization: this.token,
            },
          },
          this.serverPass + "login"
        )
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