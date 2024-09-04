<template>
  <div id="app">
    <!-- <side-bar class="side-bar"></side-bar> -->
    <SideBar class="side-bar" />
    <TheHeader />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
    TheHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
p,
a,
img {
  padding: 0px;
  margin: 0px;
}
body {
  font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  color: #345;
}

#app {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  overflow-x: hidden;
}

#App::-webkit-scrollbar {
  display: none;
}

.side-bar {
  grid-row: 1 /3;
}
.main {
  grid-column: 2 /3;
  grid-row: 2/3;
}
</style>
