<template>
  <section class="content">
    <div class="grid">
      <div class="titulo">
        <h1 class="titulo-texto">O que há de novo</h1>
        <div class="convite">
          <h2 class="convite-titulo">
            Acompanhe as novas atualizações e melhorias.
          </h2>
        </div>

        <div class="grupo-tag">
          <ul class="flex-lista-ul">
            <li class="item-tag tag-versao">
              <a class="flex-lista-li"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="#22C55E"
                  viewBox="0 0 256 256"
                  class="bullet-icon"
                >
                  <path
                    d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"
                  ></path></svg
                >Versão</a
              >
            </li>
            <li class="item-tag tag-versao">
              <a class="flex-lista-li"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="#3B82F6"
                  viewBox="0 0 256 256"
                  class="bullet-icon"
                >
                  <path
                    d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"
                  ></path></svg
                >Piloto</a
              >
            </li>
            <li class="item-tag tag-versao">
              <a class="flex-lista-li"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="#EF4444"
                  viewBox="0 0 256 256"
                  class="bullet-icon"
                >
                  <path
                    d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"
                  ></path></svg
                >Correção</a
              >
            </li>
          </ul>
        </div>
        <div class="divisao"></div>
      </div>

      <div
        class="atualizacoes"
        v-for="communicateItem in communicates"
        v-bind:key="communicateItem.id"
      >
        <div class="data-postagem">
          <span class="data">{{
            dateDefault(communicateItem.data_publicacao)
          }}</span>
        </div>

        <div class="atualizacao-item">
          <div class="tag">
            <!-- <span class="item-tag">{{ communicateItem.tag }}</span> -->
            <span class="item-tag tag-versao">
              <a class="flex-lista-li"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  v-bind:fill="getColorTag(communicateItem.tag)"
                  viewBox="0 0 256 256"
                  class="bullet-icon"
                >
                  <path
                    d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"
                  ></path></svg
                >{{ communicateItem.tag }}</a
              >
            </span>
          </div>
        </div>
        <h2 class="titulo-atualizacao">
          {{ communicateItem.titulo }}
        </h2>
        <div class="atualizacao">
          <div class="texto-atualizacao">
            <span v-html="communicateItem.descricao"></span>
            <!-- {{ communicateItem.descricao }} -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
export default {
  name: "ReleaseView",
  data() {
    return {
      communicates: null,
    };
  },
  computed: {
    url() {
      const query = this.$route.path;
      return query;
    },
  },
  methods: {
    getCommunicates() {
      api.get(this.url).then((response) => {
        return (this.communicates = response.data);
      });
    },
    dateDefault(date) {
      return new Date(date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    getColorTag(tag) {
      const colors = {
        Versão: "#22C55E",
        Piloto: "#3B82F6",
        Correção: "#EF4444",
      };
      return colors[tag] || "#6C757D";
    },
  },
  created() {
    this.getCommunicates();
  },
};
</script>

<style scoped>
.content {
  display: grid;
  justify-content: center;
  width: 100vw;
}

.grid {
  display: grid;
  max-width: 1024px;
  justify-content: center;
}

.titulo-texto {
  color: #04aa6d;
  font-size: 1.875rem;
}
.convite {
  margin: 15px 0px;
}
.convite-titulo {
  font-size: 0.9375rem;
  font-weight: normal;
  color: #6f6f6f;
}

.grupo-tag > ul {
  padding-left: 0px;
}

.item-tag {
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  margin-right: 15px;
  padding: 2px 8px;
  font-size: 0.8125rem;
  font-weight: 500;
}

.item-tag:hover {
  background-color: #f3f3f3;
}
.flex-lista-ul {
  display: flex;
}

.tag-versao {
  display: flex;
  align-items: center;
  width: max-content;
}

.flex-lista-li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.divisao {
  border-bottom: 1px solid;
  border-color: #e2e2e2;
  margin-top: 15px;
}

.data {
  font-size: 0.8125rem;
  font-weight: 500;
}

.atualizacoes {
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 20px 5px;
  transition: transform 0.2s ease-in-out;
}

.atualizacoes:hover {
  transform: translateY(-5px);
}

.titulo-atualizacao {
  grid-column: 2;
  margin: 10px 0px;
  font-size: 1.2rem;
}

.atualizacao {
  grid-column: 2;
}

p {
  margin: 0px;
}

.bullet-icon {
  vertical-align: middle;
}

/* .communicates {
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
  transform: translateX(-5px);
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
} */
</style>
