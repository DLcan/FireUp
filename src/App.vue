<template>
  <v-app id="example-1" toolbar footer dark>
<!--     <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      enable-resize-watcher
      absolute
      dark
    >
      <v-list dense>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-list-tile  
            v-for="item in items" 
            :key="item.title"
            router
            :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar dark fixed>
      <v-toolbar-title>
<!--         <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
 -->        <router-link to="/" tag="span" style="cursor: pointer">
          FireUp
        </router-link>
      </v-toolbar-title>
          
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items>
        <v-btn 
        flat
        router
        :to= "giris.link">
          <v-icon left>{{ giris.icon }}</v-icon>
            {{ giris.title }}
        </v-btn>
      </v-toolbar-items> -->
      <!-- <v-toolbar-items>
        <v-btn 
        flat
        router
        :to= "ekle.link">
          <v-icon left>{{ ekle.icon }}</v-icon>
            {{ ekle.title }}
        </v-btn>
      </v-toolbar-items> -->

    </v-toolbar>
    <main>
      <v-container fluid>
        <!--v-router-->
        <router-view></router-view>
      </v-container>
    </main>
    
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'AnaSayfa', link: '/' }
/*           { icon: 'D', title: 'Dişiler', link: '/disiler' },
          { icon: 'E', title: 'Erkekler', link: '/erkekler' },
          { icon: 'Y', title: 'Yeni Doğanlar', link: '/doganlar' },
          { icon: 'K', title: 'Kesilenler', link: '/kesilenler' } */
/*           { icon: 'library_books', title: 'Son Durum', link: '/sondurum' },
          { icon: 'zoom_in', title: 'İncele', link: '/incele' },
          { icon: 'add_to_photos', title: 'Doğum', link: '/dogum' },
          { icon: 'warning', title: 'Kesim', link: '/kesim' } */
        ],
        ekle: { icon: 'add', title: 'Yeni Kayıt', link: '/ekle' },
        giris: { icon: 'perm_identity', title: 'Giris', link: '/giris' },
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'FireUp'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
