<template>
  <b-container fluid id="footer_button" sticky>
    <b-row align-h="center">
      <b-col cols="5" id="my_button">
        <b-input-group>
          <b-form-input id="send_input" type="text" placeholder="Write..." variant="primary"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-primary">Send</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./bottom_button.js"></script>
<style src="./bottom_button.css"></style>
