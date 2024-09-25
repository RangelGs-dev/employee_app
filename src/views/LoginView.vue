<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Senha</label>
      <input
        type="password"
        name="senha"
        id="password"
        v-model="login.password"
      />
      <button class="btn" v-on:click.prevent="logar">Entrar</button>
      <CreateLogin />
    </form>
  </section>
</template>
<script>
import CreateLogin from "@/components/CreateLogin.vue";
export default {
  name: "LoginView",
  components: {
    CreateLogin,
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    logar() {
      this.$store.dispatch("getUser", this.login.email);
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 40px;
  text-align: center;
  font-size: 2rem;
  color: #04aa6d;
}
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100vh;
}
form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}

.btn:hover {
  transform: scale(1.1);
}

input {
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}
</style>
