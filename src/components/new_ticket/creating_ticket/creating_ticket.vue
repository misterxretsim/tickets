<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="6" id="create_ticket">
        <b-form-group class="mt-4" label="Theme:" label-for="select-1">
          <b-form-select v-model="selected" id="select-1" :options="this.$store.getters.themes">
            <template slot="first">
              <option :value="null" disabled>-- Please select a theme --</option>
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group class="mt-4" label="Title:" label-for="input-title">
          <b-form-input
            v-model="title"
            :state="title.length > 2 && title.length < 31"
            id="input-title"
            type="text"
            placeholder="Title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Description:" label-for="textarea-1">
          <b-form-textarea
            id="textarea-1"
            v-model="text"
            :state="text.length > 9 && text.length < 141"
            placeholder="Describe the problem"
            rows="3"
            max-rows="10"
          ></b-form-textarea>
        </b-form-group>
        <b-button block class="mt-4" variant="outline-primary" @click="onCreate">Create</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./creating_ticket.js"></script>
<style src="./creating_ticket.css"></style>
