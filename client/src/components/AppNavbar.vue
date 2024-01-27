<template>
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/tutorials">Tutorials</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar'
  }
  </script>
  
  <style scoped>
    .navbar {
        background-color: #121212;
        color: #E0E0E0;
        padding: 1rem;
        display: flex;
        justify-content: center;
    }
    .navbar ul {
        list-style: none;
        display: flex;
    }
    .navbar ul li {
        margin: 0 10px;
    }
    .navbar ul li a {
        color: #E0E0E0;
        text-decoration: none;
    }
</style>