<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-size: 16px;
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
  font-family: "Unimed Sans", ui-sans-serif, system-ui, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  color: #345;
}

#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

#App::-webkit-scrollbar {
  display: none;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #42b983;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  color: #60656c;
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Unimed Sans", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  border-color: #42b983;
}
</style>
