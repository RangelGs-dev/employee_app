<template>
  <div class="home">
    <div class="welcome">
      <h1>Olá,</h1>
      <h2 class="title-card">Acesso as aplicações abaixo.</h2>
    </div>

    <CardsList />
  </div>
</template>

<script>
import CardsList from "@/components/CardsList.vue";

export default {
  name: "HomeView",
  components: {
    CardsList,
  },
};
</script>
<style scoped>
.home {
  width: 100vw;
  margin: auto;
}

h1 {
  margin-bottom: 20px;
  color: #04aa6d;
  font-size: 2rem;
}
h2 {
  font-size: 1.2rem;
  color: #04aa6d;
  margin-bottom: 40px;
}

.welcome {
  width: 1224px;
  margin: auto;
}

@media (max-width: 600px) {
  .welcome {
    width: 500px;
    grid-template-columns: 1fr;
    margin: auto;
  }
}

@media (max-width: 412px) {
  .welcome {
    width: 345px;
    grid-template-columns: 1fr;
    margin: auto;
  }
}
</style>
