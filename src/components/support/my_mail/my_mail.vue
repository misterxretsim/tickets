<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col></b-col>
      <b-col cols="5" id="my_mail">
        <my_msg></my_msg>
      </b-col>
      <b-col class="text-center" id="right-buttons">
        <b-button-group v-if="this.$store.getters.auth.login === 'admin'" class="mt-3">
          <b-button variant="outline-primary" @click="changeStatus">{{ this.$store.getters.status }}</b-button>
          <b-button variant="outline-danger" @click="onDelete">delete</b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./my_mail.js"></script>
<style src="./my_mail.css"></style>