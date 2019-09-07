<template>
  <b-container fluid id="footer_button" sticky>
    <b-row align-h="center">
      <b-col cols="5" id="my_button">
        <b-input-group v-if="this.$store.getters.auth.login === 'admin'">
          <b-form-input autocomplete="off" id="send_input" disabled type="text" variant="primary"></b-form-input>
          <b-input-group-append>
            <b-button disabled variant="outline-primary">Send</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-input-group v-else>
          <b-form-input autocomplete="off" v-on:keyup.enter="onSend" v-model="msg" id="send_input" type="text" placeholder="Write..." variant="primary"></b-form-input>
          <b-input-group-append>
            <b-button @click="onSend" variant="outline-primary">Send</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./bottom_button.js"></script>
<style src="./bottom_button.css"></style>
