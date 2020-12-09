<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contacts">Contact</router-link> |
      <router-link to="/product/1">Produit 1</router-link> |
      <router-link to="/product/2">Produit 2</router-link> |
      <router-link :to="{name: 'Product', params: {id: 5}}">About 2</router-link> |
      <router-link to="Movie">Movie</router-link> |
      <router-link to="/ListMovie">Liste-Movie</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routeName: 'About',
    };
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
