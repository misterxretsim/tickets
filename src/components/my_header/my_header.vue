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
      <b-input-group
        id="choose-group"
        class="ml-auto"
        v-if="location() === '#/'"
      >
        <b-form-select id="choosing-select" v-model="choosen" variant="outline-secondary">
          <option :value="'all'" disabled>Choose theme</option>
          <option :value="'all'">All themes</option>
          <option v-for="theme in this.$store.getters.themes" :key="theme.text">{{ theme.text }}</option>
        </b-form-select>
        <b-input-group-append>
          <b-button variant="outline-secondary" @click="onChoose">Choose</b-button>
        </b-input-group-append>
      </b-input-group>
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
        <b-nav-item v-if="this.$store.getters.deletedTicketsWithoutTheme.length" href="#/trash">Trash</b-nav-item>
        <b-nav-item v-else href="#/trash" disabled>Trash</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#/login" @click="clearAuth">Sign out</b-nav-item>
      </b-navbar-nav>
      <b-input-group
        id="choose-group"
        class="ml-auto"
        v-if="location() === '#/' || location() === '#/trash'"
      >
        <b-form-select id="choosing-select" v-model="choosen" variant="outline-secondary">
          <option :value="'all'" disabled>Choose theme</option>
          <option :value="'all'">All themes</option>
          <option v-for="theme in this.$store.getters.themes" :key="theme.text">{{ theme.text }}</option>
        </b-form-select>
        <b-input-group-append>
          <b-button variant="outline-secondary" @click="onChoose">Choose</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-collapse>
  </b-navbar>
</template>

<script src="./my_header.js"></script>
<style src="./my_header.css"></style>
