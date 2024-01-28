<template>
    <div class="home">
      <div class="section welcome-section">
        <h1>Welcome to the Git Learning Platform</h1>
      </div>
      <div class="section select-type-section">
        <div class="select-type-content">
          <h2>Select Type</h2>
          <ul>
            <li class="option-card" @click="goTo('/organisation')">For Organisation</li>
            <li class="option-card" @click="goTo('/personal-use')">For Personal Use</li>
            <li class="option-card" @click="goTo('/team')">For a Team</li>
            <!-- Add more options if needed -->
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  export default {
    name: 'HomeView',
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
        scrollTrigger: {
          trigger: ".welcome-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })
      .to(".welcome-section h1", { scale: 0.01, autoAlpha: 0, ease: "none" })
      .from(".select-type-section", { autoAlpha: 0, ease: "none" }, "<");
    },
    methods: {
      goTo(path) {
        this.$router.push(path);
      }
    },
  };
  </script>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.welcome-section h1 {
  font-size: 6em;
}

.select-type-section {
  width: 100%;
}

.select-type-content {
  max-width: 100%;
  margin: auto;
  padding: 0 10px; /* Add some padding for smaller screens */
}

.select-type-section h2 {
  font-size: 6em;
  margin-bottom: 2rem;
}

.select-type-section ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
  gap: 20px; /* Adds space between cards */
}

.option-card {
  background-color: #333;
  padding: 2rem;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.3s ease;
  font-size: 1.5em;
  flex: 1; /* Equal flex-grow, flex-shrink, and flex-basis */
  min-width: 250px; /* Minimum width for each card */
  max-width: 300px; /* Maximum width to prevent cards from getting too large */
}

.option-card:hover {
  transform: scale(1.1);
}

</style>