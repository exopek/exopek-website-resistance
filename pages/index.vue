<template>
  <div>
    <h1>Welcome to Exopek</h1>
    <p>Discover our range of resistance bands tailored for different needs.</p>
    <ul>
      <li><nuxt-link to="/seniors-rehab">Seniors and Rehab Patients</nuxt-link></li>
      <li><nuxt-link to="/fitness-beginners">Fitness Beginners</nuxt-link></li>
      <li><nuxt-link to="/strength-athletes">Strength Athletes</nuxt-link></li>
      <li><nuxt-link to="/yoga-pilates">Yoga and Pilates Enthusiasts</nuxt-link></li>
      <li><nuxt-link to="/outdoor-fitness">Outdoor Fitness Fans</nuxt-link></li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0.5em 0;
}
</style>
