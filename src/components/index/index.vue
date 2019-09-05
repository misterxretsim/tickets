<template>
  <div>
    <my_header></my_header>
    <my_main></my_main>
    <add_ticket v-if="this.$store.getters.auth.login !== 'admin'"></add_ticket>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.css"></style>
