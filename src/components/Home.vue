
<template>
   <v-container fluid>
      <v-layout>
          <v-flex xs12 class="text-xs-center">
            <v-progress-circular
            indeterminate
            class="primary--text"
            :width="4"
            :size="90"
            v-if="loading">Kayıtlar yükleniyor</v-progress-circular>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex  sm6 offset-sm3>
            <v-card v-if="durumal==0">
              <p>
                <h5 align="center">Henüz belli değil</h5>
              </p>
            </v-card>
            <v-card>
              <v-card-media v-if="durumal==0" src="/cem/static/belirsiz_.jpg" height=1000px>
              </v-card-media>
              <v-card-media v-if="durumal==1" src="/cem/static/up.png" height=700px>
              </v-card-media>
              <v-card-media v-if="durumal==2" src="/cem/static/down.jpeg" height=700px>
              </v-card-media>
            </v-card>
          </v-flex>
        </v-layout>    
    </v-container>
</template>
<script>
    export default {
      computed: {
        loading () {
          return this.$store.getters.gLoading
        },
        durumal () {
          const sayi = this.$store.getters.gYukluFire
          const durumumuz = sayi[0].updown
          return durumumuz
        }
      }
    }
  </script>