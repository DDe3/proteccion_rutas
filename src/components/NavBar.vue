<template>
  <div>
    <router-link :to="urlAbout">Home</router-link>
    <router-link :to="urlListaPokemon">Lista Pokemon</router-link>
    <router-link :to="urlpokemonId">Pokemon ID</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    obtenerToken(usuario, password) {
      return "123456qwe";
    },
  },

  computed: {
    urlAbout() {
      return "/"+"?token=" + this.obtenerToken("asd", "123");
    },
    urlListaPokemon() {
      return "/listaPokemon" + "?token=" + this.obtenerToken("asd", "123");
    },
    urlpokemonId() {
      return "/pokemonId" + "?token=" + this.obtenerToken("asd", "123");
    },
  },
};
</script>

<style>
a {
  font-weight: bold;
  color: blue;
  margin: 0 10px;
}

a:hover {
  color: yellowgreen;
}

.router-link-exact-active {
  color: yellowgreen;
}
</style>