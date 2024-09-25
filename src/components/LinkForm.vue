<template>
  <div class="form-content">
    <form>
      <label for="title">Nome</label>
      <input id="title" name="title" type="text" v-model="title" />
      <label for="iconPath">Icone</label>
      <input id="iconPath" name="iconPath" type="text" v-model="iconPath" />
      <label for="description">Descrição</label>
      <input
        id="description"
        name="description"
        type="text"
        v-model="description"
      />
      <label for="link">Link</label>
      <input id="link" name="link" type="text" v-model="link" />
    </form>
  </div>
</template>

<script>
export default {};
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
</style>
