<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="4" id="loginForm">
        <b-form @submit.prevent>
          <b-form-group id="input-group-1" label="Login:" label-for="input-1">
            <b-input-group prepend="✉️">
              <b-form-input
                id="input-1"
                v-model="login"
                type="text"
                required
                placeholder="login"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-input-group prepend="🔒">
              <b-form-input
                id="input-2"
                v-model="pass"
                type="password"
                required
                placeholder="password"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-link to="/">
            <b-button type="submit" block variant="outline-primary" @click="updateAuth">Submit</b-button>
          </b-link>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>


<script src="./login.js"></script>
<style src="./login.css"></style>