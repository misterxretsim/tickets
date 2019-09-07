<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="6" id="my_content">
        <b-card-group columns class="mb-3">
          <b-card
            v-for="ticket in this.$store.getters.deletedTickets"
            :key="ticket.id"
            :title="ticket.title"
            :border-variant="'danger'"
            :header-border-variant="'danger'"
            :header-text-variant="'danger'"
            align="center"
          >
            <b-card-text v-if="ticket.body.length > 49">{{ ticket.body.substr(0, 50) + '...' }}</b-card-text>
            <b-card-text v-else>{{ ticket.body }}</b-card-text>
            <b-button-group class="mb-2">
              <b-button variant="outline-primary" @click="onOpened(ticket.id)">Open</b-button>
              <b-button variant="outline-primary" @click="onClosed(ticket.id)">Close</b-button>
            </b-button-group>
            <div>
              <small class="text-muted by">{{'by ' + author(ticket.author)}}</small>
            </div>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>


<script src="./trash_body.js"></script>
<style src="./trash_body.css"></style>