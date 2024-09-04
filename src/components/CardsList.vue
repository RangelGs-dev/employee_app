<template>
  <section class="cards-container">
    <a
      class="card-link"
      v-for="card in cardLinks"
      v-bind:key="card.id"
      v-bind:href="card.link"
    >
      <div class="card-icon">
        <img v-bind:src="card.iconPath" alt="" />
      </div>
      <div class="card-body">
        <h2 class="title">{{ card.titulo }}</h2>
        <p class="description">{{ card.descricao }}</p>
      </div>
    </a>
    {{ url }}
  </section>
</template>

<script>
import { api } from "@/services.js";
export default {
  name: "CardList",
  data() {
    return {
      cardLinks: null,
    };
  },
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }
      console.log(queryString);
      return "/cardLinks?_limit=10" + queryString;
    },
  },
  methods: {
    getCardLinks() {
      api.get(this.url).then((response) => (this.cardLinks = response.data));
    },
  },
  watch: {
    url() {
      this.getCardLinks();
    },
  },
  created() {
    this.getCardLinks();
  },
};
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
}

h2 {
  font-size: 1rem;
  font-weight: 400;
}

a {
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #f5f5f5;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
  height: 100px;
  border-radius: 5px;
}

a:focus,
a:hover {
  transform: scale(1.1);
}

.card-icon {
  display: flex;
  align-items: center;
  margin-right: 15px;
  background: #04aa6d;
  height: 100%;
  padding: 16px;
  border-radius: 5px 0px 0px 5px;
}

.card-icon img {
  width: 50px;
  height: 50px;
  color: #ffff;
}

.title {
  color: #60656c;
  font-weight: bold;
}

.description {
  font-size: 14px;
  font-weight: 400px;
  color: #888ea8;
}
</style>
