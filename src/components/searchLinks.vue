<template>
  <form>
    <input
      name="search"
      class="nav-search-input"
      type="text"
      v-model="search"
      placeholder="Faça sua busca aqui..."
      v-on:keyup.prevent="searchLinks"
    />
    <!-- <input
      type="text"
      placeholder="Faça sua busca aqui"
      class="nav-search-input hidden"
    /> -->
    <!-- <input
      type="submit"
      id="search-input"
      value="Busca"
      v-on:keyup.enter.prevent="searchLinks"
    /> -->
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
      this.$router.push({ query: { search: this.search } });
    },
  },
};
</script>

<style scoped>
.nav-search-input {
  background: url(~@/assets/icons/search.svg) no-repeat;
  padding: 10px 35px 10px 40px;
  width: 260px;
  background-size: 20px 20px;
  background-position: left 10px center;
  margin-right: 10px;
  outline-color: #00995d;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}
</style>
