<template>
  <div class="header-container">
    <header>
      <div class="nav">
        <div class="nav-logo">
          <router-link to="/">
            <img src="../assets/layout_set_logo.png" alt="logo Oeste do Pará" />
          </router-link>
        </div>

        <div class="nav-search-user">
          <!-- <input
            type="text"
            placeholder="Faça sua busca aqui"
            class="nav-search-input hidden"
          /> -->
          <SearchLinks />
          <div class="nav-user">
            <router-link to="/">
              <img
                src="https://www.unimed.coop.br/site/o/sites-theme/images/icons/menu_login-icon-white.svg"
                alt="user"
              />
              <p>Login</p>
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import SearchLinks from "./searchLinks.vue";
export default {
  name: "TheHeader",
  components: {
    SearchLinks,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100vw;
  background-color: #ffffff;
  margin-bottom: 60px;
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid #e7e7ed;
}

.nav {
  display: flex;
  justify-content: space-between;
  max-width: 1753px;
  margin: auto;
}

.nav-logo img {
  max-width: 150px;
  max-height: 65px;
}

.nav-search-user {
  display: flex;
  justify-content: end;
  padding: 0.4375rem 0px 0.9375rem 0px;
}

.nav-search-input {
  background: url(~@/assets/icons/search.svg) no-repeat;
  padding: 10px 35px 10px 40px;
  width: 260px;
  background-size: 20px 20px;
  background-position: left 10px center;
  margin-right: 10px;
  outline-color: #00995d;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}

.nav-user a {
  display: flex;
  justify-content: space-around;
  border-radius: 0.25rem;
  background-color: #00995d;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  box-shadow: 0 8px 8px rgba(30, 60, 90, 0.3);
}

.nav-user p {
  color: #ffffff;
}
.nav-user img {
  width: 22px;
  color: #ffffff;
  margin-right: 10px;
}

@media (max-width: 412px) {
  .hidden {
    display: none;
  }
}
</style>
