<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="5" id="my_mail" v-if="this.$store.getters.auth.login === 'admin'">
        <ul class="list-unstyled" id="ul_msg">
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 variant="danger" class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">Hello!</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">How can I help you?</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">You</h5>
            </b-row>
            <b-row align-h="end" class="padding-left-right">
              <p class="mb-0">Yep!</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">You</h5>
            </b-row>
            <b-row align-h="end" class="padding-left-right">
              <p class="mb-0">I need info about my comp.</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">Ok.</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">Hello!</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">How can I help you?</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">You</h5>
            </b-row>
            <b-row align-h="end" class="padding-left-right">
              <p class="mb-0">Yep!</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">How can I help you?</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">You</h5>
            </b-row>
            <b-row align-h="end" class="padding-left-right">
              <p class="mb-0">Yep!</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">How can I help you?</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">You</h5>
            </b-row>
            <b-row align-h="end" class="padding-left-right">
              <p class="mb-0">Yep!</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">How can I help you?</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">You</h5>
            </b-row>
            <b-row align-h="end" class="padding-left-right">
              <p class="mb-0">Yep!</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="start" class="padding-left-right">
              <h5 class="mt-0 mb-1">Elena</h5>
            </b-row>
            <b-row align-h="start" class="padding-left-right">
              <p class="mb-0">How can I help you?</p>
            </b-row>
          </b-media>
          <b-media tag="li" class="my-4">
            <b-row align-h="end" class="padding-left-right">
              <h5 class="mt-0 mb-1">You</h5>
            </b-row>
            <b-row align-h="end" class="padding-left-right">
              <p class="mb-0">Yep!</p>
            </b-row>
          </b-media>
        </ul>
      </b-col>
      <b-col cols="6" id="my_mail" v-else></b-col>
    </b-row>
  </b-container>
</template>

<script src="./my_mail.js"></script>
<style src="./my_mail.css"></style>
