<template>
  <section class="communicates">
    <header class="header">
      <h2>Comunicados</h2>
    </header>
    <main class="bulletin-list">
      <div
        class="bulletin-card"
        v-for="communicateItem in communicates"
        v-bind:key="communicateItem.id"
      >
        <h2 class="bulletin-title">{{ communicateItem.titulo }}</h2>
        <p class="bulletin-date">{{ communicateItem.data_publicacao }}</p>
        <p class="bulletin-description">{{ communicateItem.descricao }}</p>
      </div>
    </main>
  </section>
</template>

<script>
import { api } from "@/services.js";
export default {
  neme: "CommunicatesView",
  data() {
    return {
      communicates: null,
    };
  },
  computed: {
    url() {
      const query = this.$route.path;
      console.log(query);
      return query;
    },
  },
  methods: {
    getCommunicates() {
      api.get(this.url).then((response) => {
        return (this.communicates = response.data);
      });
    },
  },
  created() {
    this.getCommunicates();
  },
};
</script>

<style scoped>
.communicates {
  width: 90%;
  max-width: 800px;
  margin: 20px auto;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h2 {
  color: #04aa6d;
  font-size: 1.5rem;
  margin: 0;
}

.bulletin-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bulletin-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.bulletin-card:hover {
  transform: translateY(-5px);
}

.bulletin-title {
  color: #333;
  font-size: 1.5rem;
  margin: 0 0 10px;
}

.bulletin-date {
  color: #777;
  font-size: 0.9rem;
  margin: 0 0 10px;
}

.bulletin-description {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}
</style>
