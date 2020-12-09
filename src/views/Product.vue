<template>
  <div>
    <h1> Page produit {{ $route.params.id }}</h1>
    <button @click="redirect">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  methods: {
    redirect() {
      this.router.push({
        name: 'About',
      });
    },
  },
};
</script>

<style scoped>

</style>
