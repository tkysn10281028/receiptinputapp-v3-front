<template>
  <div id="main-view">
    <h2>Hello, This is Test Page</h2>
    <p>emailaddress:<input type="text" v-model="emailaddress" /></p>
    <p>password:<input type="password" v-model="password" /></p>
    <button @click="login">Login!</button><br />
    <button @click="logout">Logout</button><br />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailaddress: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      const url = location.origin + "/";
      const params = new URLSearchParams();
      params.append("emailaddress", this.emailaddress);
      params.append("password", this.password);
      this.axios
        .post(
          url,
          params,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0a3lzbjEwMjhAZ21haWwuY29tIiwiaXNzIjoiY29tLnNvbm8ubXliYXRjaCIsImlhdCI6MTY2NzcxOTczOCwiZXhwIjoxNjY4MzI0NTM4fQ.ISCX9j6isOda5LgTD6hAkMgpo1ijYCZ0_zRez1xNlvg",
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
    logout: function () {
      const url = location.origin + "/api/v1/logout";
      this.axios.get(url).then((response) => console.log(response));
    },
    search: function () {
      const url = location.origin + "/api/v1/getResultBySearchWord";
      const params = new URLSearchParams();
      params.append("searchWord", "search");
      this.axios
        .post(
          url,
          params,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0a3lzbjEwMjhAZ21haWwuY29tIiwiaXNzIjoiY29tLnNvbm8ubXliYXRjaCIsImlhdCI6MTY2NzcxOTczOCwiZXhwIjoxNjY4MzI0NTM4fQ.ISCX9j6isOda5LgTD6hAkMgpo1ijYCZ0_zRez1xNlvg",
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