<template>
  <v-card class="mx-auto" max-width="400">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5"> San Francisco </v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="text-h2" cols="6"> 23&deg;C </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
