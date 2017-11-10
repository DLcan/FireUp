
import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VCard,
  VFooter,
  VList,
  VGrid,
  VToolbar,
  VTooltip,
  VProgressCircular,
  transitions
} from 'vuetify'

import App from './App'
import router from './router'
import { store } from './store'
import * as firebase from 'firebase'
import DateFilter from './filters/date'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VFooter,
    VList,
    VGrid,
    VToolbar,
    VTooltip,
    VProgressCircular,
    transitions
  }
})

Vue.config.productionTip = false
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAlxq8XJI51ks8dz7rCHi-OcnwyNqzIoOQ',
      authDomain: 'updown-f85c5.firebaseapp.com',
      databaseURL: 'https://updown-f85c5.firebaseio.com',
      projectId: 'updown-f85c5',
      storageBucket: 'updown-f85c5.appspot.com'
    })
    this.$store.dispatch('YukleF')
  }
})
