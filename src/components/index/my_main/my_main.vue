<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="6" id="my_content" v-if="this.$store.getters.auth.login === 'admin'">
        <b-card-group columns
          class="mb-3"
        >
          <b-card
            v-for="ticket in this.$store.getters.activeTickets"
            :key="ticket.id"
            :title="ticket.title"
            :border-variant="ticket.status"
            :header-border-variant="ticket.status"
            :header-text-variant="ticket.status"
            align="center"
            @click="onClick"
          >
            <b-btn-close
              text-variant="muted"
              id="delete"
              v-b-tooltip.hover
              title="Delete ticket"
              @click="onDelete(ticket.id)"
            ></b-btn-close>
            <b-card-text>{{ ticket.body.substr(0, 50) + '...' }}</b-card-text>
            <div>
              <small class="text-muted by">{{'by ' + author(ticket.author)}}</small>
            </div>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="6" id="my_content" v-else>
        <b-card-group class="mb-3" columns>
          <b-card
            v-for="ticket in this.$store.getters.activeTicketsById(this.$store.getters.userIdByLogin)"
            :key="ticket.id"
            :title="ticket.title"
            :border-variant="ticket.status"
            :header-border-variant="ticket.status"
            :header-text-variant="ticket.status"
            align="center"
            @click="onClick"
          >
            <b-card-text>{{ ticket.body.substr(0, 50) + '...' }}</b-card-text>
            <div>
              <small class="text-muted by">{{'by ' + author(ticket.author)}}</small>
            </div>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./my_main.js"></script>
<style src="./my_main.css"></style>