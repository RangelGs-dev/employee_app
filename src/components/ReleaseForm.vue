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
      <select name="tags" id="tags" v-model="tag">
        <option value="" selected disabled>Selecione uma tag</option>
        <option value="Piloto">Piloto</option>
        <option value="Correção">Correção</option>
        <option value="Versão">Versão</option>
      </select>
      <TinyEditor v-on:update-content="updateContent" />
      <button v-on:click.prevent="createNewRelease" class="btn btn-release">
        Enviar
      </button>
    </form>
  </div>
</template>

<script>
import TinyEditor from "./TinyEditor.vue";

export default {
  name: "ReleaseForm",
  components: { TinyEditor },
  computed: {
    title: {
      get() {
        return this.$store.state.releaseItem.title;
      },
      set(value) {
        this.$store.commit("UPDATE_RELEASE", { title: value });
      },
    },
    editorContent: {
      get() {
        return this.$store.state.releaseItem.description;
      },
      set(value) {
        this.$store.commit("UPDATE_RELEASE", {
          editorContent: value,
        });
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
    updateContent(value) {
      this.editorContent = value;
    },
    createNewRelease() {
      this.$store.dispatch("createRelease", this.$store.state.releaseItem);
      this.$store.commit("UPDATE_RELEASE", {
        title: "",
        tag: "",
        editorContent: "",
      });
      this.updateContent = "";
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

.btn-release {
  margin-top: 15px;
}
</style>
