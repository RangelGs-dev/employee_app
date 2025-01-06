<template>
  <div class="form-content">
    <form>
      <label for="title">Titulo</label>
      <input id="title" name="title" type="text" v-model="title" required />
      <label for="iconPath">Icone</label>
      <input
        id="iconPath"
        name="iconPath"
        type="text"
        v-model="iconPath"
        required
      />
      <label for="description">Descrição</label>
      <input
        id="description"
        name="description"
        type="text"
        v-model="description"
        required
      />
      <label for="link">Link</label>
      <input id="link" name="link" type="text" v-model="link" required />
      <button class="btn" v-on:click.prevent="createNewLink">Criar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LinkForm",
  computed: {
    title: {
      get() {
        return this.$store.state.cardLink.title;
      },
      set(value) {
        this.$store.commit("UPDATE_LINK", { title: value });
      },
    },
    iconPath: {
      get() {
        return this.$store.state.cardLink.iconPath;
      },
      set(value) {
        this.$store.commit("UPDATE_LINK", { iconPath: value });
      },
    },
    description: {
      get() {
        return this.$store.state.cardLink.description;
      },
      set(value) {
        this.$store.commit("UPDATE_LINK", { description: value });
      },
    },
    link: {
      get() {
        return this.$store.state.cardLink.link;
      },
      set(value) {
        this.$store.commit("UPDATE_LINK", { link: value });
      },
    },
  },
  methods: {
    createNewLink() {
      this.$store.dispatch("createCardLink", this.$store.state.cardLink);
      this.$store.commit("UPDATE_LINK", {
        title: "",
        iconPath: "",
        description: "",
        link: "",
      });
    },
  },
};
</script>
<style scoped>
form-content {
  display: grid;
}

form {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px; /* Espaçamento entre colunas */
  align-items: baseline;
  margin: 0 auto;
  max-width: 600px;
  box-sizing: border-box;
}

input {
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}

.btn {
  grid-column: 2;
  max-width: 400px;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}
.btn:hover {
  transform: scale(1.1);
}
</style>
