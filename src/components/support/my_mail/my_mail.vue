<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col></b-col>
      <b-col cols="5" id="my_mail" v-if="this.$store.getters.auth.login === 'admin'">
        <ul class="list-unstyled" id="ul_msg">
          <b-media
            tag="li"
            class="my-4"
            v-for="letter in this.$store.getters.letters(this.$store.getters.currentTicket)"
            :key="letter.ticket"
          >
            <b-row v-if="letter.author !== 'You'" align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">{{ letter.author }}</h5>
            </b-row>
            <b-row v-else align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">{{ letter.author }}</h5>
            </b-row>
            <b-row v-if="letter.author !== 'You'" align-h="start" class="padding-left-right">
              <p class="mb-0">{{ letter.value }}</p>
            </b-row>
            <b-row v-else align-h="end" class="padding-left-right">
              <p class="mb-0">{{ letter.value }}</p>
            </b-row>
          </b-media>
        </ul>
      </b-col>
      <b-col cols="5" id="my_mail" v-else>
        <ul class="list-unstyled" id="ul_msg">
          <b-media
            tag="li"
            class="my-4"
            v-for="letter in this.$store.getters.letters(this.$store.getters.currentTicket)"
            :key="letter.ticket"
          >
            <b-row v-if="letter.author !== 'You'" align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">{{ letter.author }}</h5>
            </b-row>
            <b-row v-else align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">{{ letter.author }}</h5>
            </b-row>
            <b-row v-if="letter.author !== 'You'" align-h="start" class="padding-left-right">
              <p class="mb-0">{{ letter.value }}</p>
            </b-row>
            <b-row v-else align-h="end" class="padding-left-right">
              <p class="mb-0">{{ letter.value }}</p>
            </b-row>
          </b-media>
        </ul>
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
