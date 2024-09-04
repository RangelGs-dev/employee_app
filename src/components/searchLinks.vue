<template>
  <form>
    <input name="search" id="search" type="text" v-model="search" />
    <input
      type="submit"
      id="Buscar"
      value="Busca"
      v-on:click.prevent="searchLinks"
    />
    {{ search }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchLinks() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style>
form {
  text-decoration: none;
}
</style>
