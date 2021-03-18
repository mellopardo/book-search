<template>
  <div id="app">
    <div class="nav-bar">
      <h1>BooK Search</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #454545;
}

.nav-bar {
  width: 100%;
  height: 60px;
  background: rgb(7, 7, 7);
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}

.nav-bar h1 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .nav-bar {
    margin-bottom: 70px;
  }
}
</style>
