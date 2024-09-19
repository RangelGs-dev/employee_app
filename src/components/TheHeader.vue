<template>
  <div class="header-container">
    <header class="header">
      <div class="image">
        <img class="logo" src="../assets/images/logo_employee.jpg" alt="Logo" />
      </div>
      <div>
        <router-link to="/login">
          <img
            class="icon"
            src="../assets/icons/circle-user.svg"
            alt="Configurações do usuario"
          />
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  background: #fff;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.16);
  height: 80px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px 0px 20px;
}
.logo {
  max-width: 80px;
}

.icon {
  max-width: 40px;
}
a {
  color: #42b983;
}
</style>
