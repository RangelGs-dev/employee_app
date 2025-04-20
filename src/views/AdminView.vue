<template>
  <div class="container">
    <h1>Administração</h1>
    <div class="admin-options">
      <div class="admin-item">
        <span class="admin-text">Novo Endereço de Aplicação</span>
        <router-link to="/add-card-link" class="admin-link">
          Acessar
        </router-link>
      </div>
      <div class="admin-item">
        <span class="admin-text">Comunicado de Atualização</span>
        <router-link to="/add-release" class="admin-link">
          Acessar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminView",
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #f2f4f5;
}

.container {
  display: grid;
  justify-content: center;
  width: 100vw;
}

h1 {
  margin-bottom: 30px;
  color: #00995d;
  text-align: left;
  font-size: 1.875rem;
}

.admin-options {
  width: 1024px;
  background-color: #f0f4f3;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
}

.admin-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  transition: background-color 0.2s ease;
}

.admin-item:hover {
  border-left: 2px solid #42b983;
}

.admin-item:first-child {
  border-top: none;
}

.admin-item:last-child {
  border-bottom: none;
}

.admin-text {
  font-weight: 500;
  font-size: 16px;
}

.admin-link {
  text-decoration: none;
  background-color: #00995d;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.admin-link:hover {
  background-color: #007a4a;
}

@media (max-width: 968px) {
  .admin-options {
    width: 600px;
  }
}

@media (max-width: 675px) {
  .admin-options {
    max-width: 400px;
  }

  h1 {
    font-size: 1.6rem;
  }

  .admin-link {
    display: none;
  }
}
</style>
