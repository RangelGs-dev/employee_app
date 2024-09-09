<template>
  <form>
    <input
      name="search"
      id="search"
      type="text"
      v-model="search"
      placeholder="Buscar..."
    />
    <input
      type="submit"
      id="search-input"
      value="Busca"
      v-on:click.prevent="searchLinks"
    />
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px 0px 60px auto;
  position: relative;
}
#search {
  width: 100%;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
  padding: 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
  font-size: 1rem;
}

#search:focus,
#search:hover {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0 8px 12px rgba(30, 60, 90, 0.3);
}

#search-input {
  width: 62px;
  height: 62px;
  background: url("/src/assets/icons/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
