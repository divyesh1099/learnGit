<template>
    <div class="motion-path-example">
        <div id="path-container">
      <!-- Define an invisible SVG for the motion path -->
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <!-- Define a wavy path that stays within the viewbox -->
        <path id="git-motion-path" d="M500,0 Q500,250 500,500 T500,1000" stroke="transparent" fill="none" />
      </svg>
    </div>
  
      <div class="section" id="section-1">
        <p>Welcome to the <span id="git-text">Git</span> Learning Platform</p>
      </div>
      <div class="section" id="section-2">
        <!-- Other sections -->
      </div>
      <!-- Add more sections as needed -->
    </div>
  </template>
  
  <script>
  import { gsap } from "gsap";
  import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  export default {
  name: 'MotionPathExample',
  mounted() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    gsap.to("#git-text", {
      duration: 10,
      ease: "none",
      motionPath: {
        path: "#git-motion-path",
        align: "center",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      scrollTrigger: {
        trigger: "#path-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });
  }
};
  </script>
  
  <style scoped>
  /* .motion-path-example { */
    /* Your styles here */
  /* } */
  
  .section {
    height: 100vh; /* Full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 6rem;
  }
  
  #git-text {
  position: fixed; /* Fixed position to keep it within the viewport */
  top: 50%; /* Start at the vertical center */
  left: 50%; /* Start at the horizontal center */
  transform: translate(-50%, -50%); /* Adjust for center alignment */
}

#path-container {
  position: relative;
  height: 200vh; /* Set the height to twice the viewport to create scrollable area */
}
  
  /* Ensure the SVG doesn't display outside its container */
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  </style>
  