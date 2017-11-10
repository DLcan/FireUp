import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
/* import Disiler from '@/components/disiler/Disiler'
import Erkekler from '@/components/erkekler/Erkekler'
import Doganlar from '@/components/doganlar/Doganlar'
import Kesilenler from '@/components/kesilenler/Kesilenler' */
import Giris from '@/components/giris/Giris'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
/*     {
      path: '/disiler',
      name: 'Disiler',
      component: Disiler
    },
    {
      path: '/erkekler',
      name: 'Erkekler',
      component: Erkekler
    },
    {
      path: '/doganlar',
      name: 'Doganlar',
      component: Doganlar
    },
    {
      path: '/kesilenler',
      name: 'Kesilenler',
      component: Kesilenler
    }, */
    {
      path: '/giris',
      name: 'Giris',
      component: Giris
    }
  ],
  mode: 'history'
})
