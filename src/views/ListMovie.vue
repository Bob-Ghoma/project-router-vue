<template>
  <div>
    <li :key="i" v-for="(film, i) in films">
   <router-link :to="{name: 'Movie', params: {id: film.url.split('/')[5]}}">  {{ film.title }}</router-link>
    </li>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'ListMovie',
  data() {
    return {
      films: [],
    };
  },
  methods: {
    async fetchFilm() {
      // eslint-disable-next-line no-undef
      const response = await Axios.get('https://swapi.dev/api/films');
      this.films = response.data.results;
    },
    redirect() {
      this.$router.push({
        name: 'Movie',
        params: { id: film.url.split('/')[5] },
      });
    },
  },
  mounted() {
    this.fetchFilm();
  },
};
</script>

<style scoped>

</style>
