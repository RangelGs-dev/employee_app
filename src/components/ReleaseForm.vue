<template>
  <div class="form-content">
    <form>
      <input
        id="title"
        name="title"
        v-model="title"
        required
        type="text"
        placeholder="Titulo"
      />
      <input
        id="description"
        name="description"
        type="text"
        v-model="description"
        required
        placeholder="Descrição"
      />
      <select name="tags" id="tags" v-model="tag">
        <option value="" selected disabled>Selecione uma tag</option>
        <option value="Piloto">Piloto</option>
        <option value="Correção">Correção</option>
        <option value="Versão">Versão</option>
      </select>
      <button v-on:click.prevent="createNewRelease" class="btn">Clicar</button>
    </form>
    {{ $store.state.releaseItem.tag }}
  </div>
</template>

<script>
export default {
  name: "ReleaseForm",
  computed: {
    title: {
      get() {
        return this.$store.state.releaseItem.title;
      },
      set(value) {
        this.$store.commit("UPDATE_RELEASE", { title: value });
      },
    },
    description: {
      get() {
        return this.$store.state.releaseItem.description;
      },
      set(value) {
        this.$store.commit("UPDATE_RELEASE", { description: value });
      },
    },
    tag: {
      get() {
        return this.$store.state.releaseItem.tag;
      },
      set(value) {
        this.$store.commit("UPDATE_RELEASE", { tag: value });
      },
    },
  },
  methods: {
    createNewRelease() {
      this.$store.dispatch("createRelease", this.$store.state.releaseItem);
    },
  },
};
</script>

<style>
form-content {
  display: grid;
}

form {
  display: grid;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  box-sizing: border-box;
}

input {
  width: 400px;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5z"/></svg>')
    no-repeat right 10px center;
  background-size: 20px;
  padding-right: 30px;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}
</style>
