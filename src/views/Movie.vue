<template>
  <div>

    <h1>{{ films.title }}</h1>
    <h3> {{ films.director }}</h3>
    <h3> {{ films.release_date }}</h3>
    <p> {{ films.opening_crawl }}</p>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Movie',
  data() {
    return {
      films: [],
    };
  },
  methods: {
    async getInfoFilm() {
      // eslint-disable-next-line no-template-curly-in-string
      const resultat = await Axios.get(`https://swapi.dev/api/films/${this.$route.params.id}/`);
      this.films = resultat.data;
    },
  },
  mounted() {
    this.getInfoFilm();
  },
};
</script>

<style scoped>
p {
  white-space: pre;
}

</style>
