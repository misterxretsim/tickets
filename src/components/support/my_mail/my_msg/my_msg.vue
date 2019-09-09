<template>
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
        <h5 v-if="login" class="mt-0 mb-1">{{ letter.author }}</h5>
        <h5 v-else class="mt-0 mb-1">{{ authorName() }}</h5>
      </b-row>
      <b-row v-if="letter.author !== 'You'" align-h="start" class="padding-left-right">
        <p class="mb-0">{{ letter.value }}</p>
      </b-row>
      <b-row v-else align-h="end" class="padding-left-right">
        <p class="mb-0">{{ letter.value }}</p>
      </b-row>
    </b-media>
  </ul>
</template>

<script src="./my_msg.js"></script>