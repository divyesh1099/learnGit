<template>
  <div id="app">
    <AppNavbar />
    <!-- router-view will render the appropriate component based on the route -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar // Make sure your AppNavbar component is correctly imported and used here
  }
};
</script>

<style>
/* This style will be global since it's not scoped, so you may want to keep it here or move relevant parts to their respective components */
body {
  margin: 0;
  color: #E0E0E0;
  background-color: #121212;
}

/* Other global styles can remain here if they're used across multiple components */
</style>
