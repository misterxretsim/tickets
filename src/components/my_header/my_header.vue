<template>
  <b-navbar type="dark" variant="dark" id="my_header" sticky>
    <b-collapse id="nav-collapse" is-nav v-if="this.$store.getters.auth.login !== 'admin'">
      <b-navbar-nav v-if="location() === '#/'">
        <b-nav-item href="#/" disabled active>Home</b-nav-item>
        <b-nav-item href="#/new_ticket">New ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="location() === '#/new_ticket'">
        <b-nav-item href="#/">Home</b-nav-item>
        <b-nav-item href="#/new_ticket" disabled active>New ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="location() === '#/support'">
        <b-nav-item href="#/">Home</b-nav-item>
        <b-nav-item href="#/new_ticket">New ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav  class="ml-auto">
        <b-nav-item href="#/login">Sign out</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-collapse id="nav-collapse" is-nav v-else>
      <b-navbar-nav v-if="location() !== '#/support'">
        <b-nav-item href="#/" disabled active>Home</b-nav-item>
        <b-nav-item href="#/new_ticket" disabled>New ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else>
        <b-nav-item href="#/">Home</b-nav-item>
        <b-nav-item href="#/new_ticket" disabled>New ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav  class="ml-auto">
        <b-nav-item href="#/login">Sign out</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script src="./my_header.js"></script>
<style src="./my_header.css"></style>
