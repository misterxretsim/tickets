<template>
  <b-navbar type="dark" variant="dark" id="my_header" sticky>
    <b-collapse id="nav-collapse" is-nav v-if="this.$store.getters.auth.login !== 'admin'">
      <b-navbar-nav v-if="location() === '#/'">
        <b-nav-item href="#/" disabled active>Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else>
        <b-nav-item href="#/">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="location() !== '#/new_ticket'">
        <b-nav-item href="#/new_ticket">Create ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else>
        <b-nav-item disabled active href="#/new_ticket">Create ticket</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#/login">Sign out</b-nav-item>
      </b-navbar-nav>
      <b-form-input v-if="location() === '#/'" class="ml-auto" id="searching-input" list="my-list-id"></b-form-input>
      <datalist id="my-list-id">
        <option v-for="theme in this.$store.getters.themes" :key="theme.text">{{ theme.text }}</option>
      </datalist>
    </b-collapse>
    <b-collapse id="nav-collapse" is-nav v-else>
      <b-navbar-nav v-if="location() === '#/'">
        <b-nav-item href="#/" disabled active>Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else>
        <b-nav-item href="#/">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="location() === '#/trash'">
        <b-nav-item href="#/trash" disabled active>Trash</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else>
        <b-nav-item v-if="this.$store.getters.deletedTickets.length" href="#/trash">Trash</b-nav-item>
        <b-nav-item v-else href="#/trash" disabled>Trash</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#/login">Sign out</b-nav-item>
      </b-navbar-nav>
      <b-form-input v-if="location() === '#/'" class="ml-auto" id="searching-input" list="my-list-id"></b-form-input>
      <datalist id="my-list-id">
        <option v-for="theme in this.$store.getters.themes" :key="theme.text">{{ theme.text }}</option>
      </datalist>
    </b-collapse>
  </b-navbar>
</template>

<script src="./my_header.js"></script>
<style src="./my_header.css"></style>
