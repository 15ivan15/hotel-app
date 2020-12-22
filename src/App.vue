<template>
  <div id="app">
    <div class="header-main">
      <div class="container">
        <nav class="navbar">
          <span class="logo">
            <img src="./assets/logo.png" v-on:click="Inicio" />
          </span>
          <!-- <div class="fon">
            <img src="./assets/fondo.jpg" alt="">
          </div> -->
          <nav class="buttons">
            <button v-on:click="SearchHotel">POST</button>
            <button v-on:click="SearchHotelCiudad">GET</button>
            <button v-on:click="Inicio">Inicio</button>
          </nav>
        </nav>
      </div>
    </div>
    <div class="main-component">
      <router-view> </router-view>
    </div>
    <div class="footer">
      <h2>Misión TIC 2022</h2>
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
    };
  },
  methods: {
    Inicio: function () {
      if (this.$route.name != "Inicio") {
        this.$router.push({ name: "Inicio" });
      }
    },
    SearchHotel: function () {
      if (this.$route.name != "HotelesZona") {
        this.$router.push({ name: "HotelesZona" });
      }
    },
    SearchHotelCiudad: function () {
      if (this.$route.name != "HotelesCiudad") {
        this.$router.push({ name: "HotelesCiudad" });
      }
    },
  },
  beforeCreate: function () {
    this.$router.push({ name: "Inicio" });
  },
};
</script>
<style>
body {
  margin: 0 0 0 0;
  overflow: hidden;
}

.header-main {
  width: 100%;
  height: auto;
  background-color: #b6abab;
}

.logo {
  position: absoluta;
  margin-left: 4%;
  cursor: pointer;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-main .navbar .buttons button {
  color: #041c35;
  background: #b6abab;
  border: none;
  font-size: 22px;
  padding: 10px 30px;
  cursor: pointer;
}
.header-main .navbar .buttons button:hover {
  color: #283747;
  background: #b6abab;
  border: 1px solid #e5e7e9;
}
.header-main .navbar .logo img {
  width: 300px;
  height: 100px;
}

img {
  vertical-align: middle;
  border-style: none;
}

.fon {
  position: absolute;
  margin-top: 41%;
  z-index: -40;
}

.fon img {
  width: 100%;
}

.footer {
  position: absoluta;
  width: 100%;
  height: 13vh;
  background-color: #283747;
  margin-top: 35%;
}

.footer h2 {
  display: fixed;
  width: 100%;
  height: 100%;
  color: #e5e7e9;
  text-align: center;
  padding-top: 1.5%;
}
</style>