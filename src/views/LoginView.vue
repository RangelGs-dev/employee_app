<template>
  <section class="login">
    <h1></h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="senha">Senha</label>
      <input type="senha" name="senha" id="senha" v-model="login.senha" />
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
};
</script>

<style>
:root {
  color: white;
}
</style>
