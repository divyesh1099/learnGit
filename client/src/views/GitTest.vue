<template>
    <div class="git-testing">
      <div class="section" id="welcome">
        <p>Welcome to &nbsp;&nbsp;&nbsp;&nbsp;<span id="git-text">Git</span> Learning Platform</p>
      </div>
      <div class="section" id="what-is-git">
        <p>What is <span class="empty-space-for-git-text"></span>?</p>
      </div>
      <div class="section" id="explanation">
        <p><span class="empty-space-for-git-text"></span> is a distributed version control system...</p>
      </div>
      <!-- Add more sections as needed -->
    </div>
  </template>


<script>
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 'GitTesting',
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Target the sections where "Git" will move to
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      if (index === 0) return; // Skip the first section as "Git" starts there

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        onEnter: () => moveGitToSection(section),
        onLeaveBack: () => moveGitBack(section),
        markers: true // for debugging; remove in production
      });
    });

    function moveGitToSection(section) {
      const target = section.querySelector('.empty-space-for-git-text');
      gsap.to("#git-text", {
        x: () => target.offsetLeft - document.getElementById("git-text").offsetLeft,
        y: () => target.offsetTop - document.getElementById("git-text").offsetTop,
        duration: 1
      });
    }

    function moveGitBack(section) {
      const prevSection = sections[sections.indexOf(section) - 1];
      const target = prevSection.querySelector('.empty-space-for-git-text') || prevSection;
      gsap.to("#git-text", {
        x: () => target.offsetLeft - document.getElementById("git-text").offsetLeft,
        y: () => target.offsetTop - document.getElementById("git-text").offsetTop,
        duration: 1
      });
    }
  }
};
</script>


<style scoped>
.section {
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 6rem;
}

#git-text {
  position: absolute;
  white-space: nowrap;
  top: 50%; /* Center vertically relative to its positioned ancestor */
  left: 50%; /* Center horizontally relative to its positioned ancestor */
  transform: translate(-153%, 24%); /* Adjust to align perfectly in the center */
}

.empty-space-for-git-text {
  display: inline-block;
  width: 1px;
  height: 1px;
  visibility: hidden; /* Hide the placeholder */
}
</style>
