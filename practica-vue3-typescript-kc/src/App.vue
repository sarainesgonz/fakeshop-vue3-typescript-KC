<template>
  <header>FakeShop Vue-nisimo</header>
  <router-view />
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "AppComponents",

})
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: rgb(140, 24, 140);
  padding: 1.5rem;
  color: white;
}

header {
  font-weight: bold;
  font-size: 24px;
}
</style>
