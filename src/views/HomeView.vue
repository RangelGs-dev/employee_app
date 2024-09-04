<template>
  <div class="home">
    <h1>Olá</h1>
    <h2 class="title-card">Acesso as aplicações abaixo</h2>
    <SearchLinks />
    <CardsList />
  </div>
</template>

<script>
import CardsList from "@/components/CardsList.vue";
import SearchLinks from "@/components/searchLinks.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    CardsList,
    SearchLinks,
  },
};
</script>
<style scoped>
h1 {
  margin-bottom: 30px;
  color: #04aa6d;
}
h2 {
  font-size: 1.2rem;
  color: #04aa6d;
  margin-bottom: 20px;
}

.home {
  box-sizing: border-box;
  padding: 50px;
}
</style>
