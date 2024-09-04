<template>
  <div class="sidebar-container" v-bind:class="{ open: sidebarOpen }">
    <nav class="sidebar-nav">
      <!-- <ul class="nav-ul"> -->
      <div
        class="nav-item"
        v-on:click="openSidebarWidth"
        v-bind:class="{ widthWhenOpen: sidebarOpen }"
      >
        <a class="nav-link" href="#">
          <img
            class="icon"
            src="../assets/icons/home-48.svg"
            alt="Configurações do usuario"
          />
          <span v-bind:class="{ display: displayNone }">Home</span>
        </a>
      </div>
      <div
        class="nav-item"
        v-on:click="openSidebarWidth"
        v-bind:class="{ widthWhenOpen: sidebarOpen }"
      >
        <a class="nav-link" href="#">
          <img
            class="icon"
            src="../assets/icons/comunica-48.svg"
            alt="Configurações do usuario"
          />
          <span v-bind:class="{ display: displayNone }">Noticias</span>
        </a>
      </div>
      <div
        class="nav-item"
        v-on:click="openSidebarWidth"
        v-bind:class="{ widthWhenOpen: sidebarOpen }"
      >
        <a class="nav-link" href="#">
          <img
            class="icon"
            src="../assets/icons/settings-48.svg"
            alt="Configurações do usuario"
          />
          <span v-bind:class="{ display: displayNone }">Settings</span>
        </a>
      </div>
      <!-- </ul> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      sidebarOpen: null,
      displayNone: true,
    };
  },
  methods: {
    openSidebarWidth() {
      this.sidebarOpen = !this.sidebarOpen;
      this.displayNone = !this.displayNone;
    },
  },
};
</script>

<style>
.sidebar-container {
  display: flex;
  width: 72px;
  height: 100%;
  background: #04aa6d;
  padding-top: 60px;
  animation-duration: 500ms;
  animation-name: slideout;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 1.5;
  text-decoration: none;
  color: #ffffff;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
}

.icon {
  max-width: 2rem;
}

.nav-item {
  display: flex;
  width: 100%;
  justify-content: center;
}
.sidebar-container .nav-item.widthWhenOpen {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding-left: 1.75rem;
}
.nav-item:hover {
  background-color: #ffffff1a;
  border-radius: 4px;
}

.open {
  display: flex;
  align-items: start;
  padding: 60px 1.2rem 0px 19px;
  width: 263px;
  animation-duration: 1000ms;
  animation-name: slidein;
}

.display {
  display: none;
}

@keyframes slidein {
  from {
    margin-right: 100%;
    width: 72px;
  }
  to {
    margin-right: 0%;
    width: 280px;
  }
}

@keyframes slideout {
  from {
    margin-left: 0%;
    width: 280px;
  }
  to {
    margin-left: 0%;
    width: 72px;
  }
}

.nav-link span {
  margin-left: 0.75rem;
}
</style>
