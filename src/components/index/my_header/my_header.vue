<template>
  <b-navbar type="dark" variant="dark" id="my_header" sticky>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="this.$store.getters.auth.login !== 'admin'">
        <b-nav-item href="#/" disabled active>Home</b-nav-item>
        <b-nav-item href="#">New ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else>
        <b-nav-item href="#/" disabled active>Home</b-nav-item>
        <b-nav-item href="#" disabled>New ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav  class="ml-auto">
        <b-nav-item href="#/login">Sign out</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script src="./my_header.js"></script>
<style src="./my_header.css"></style>
