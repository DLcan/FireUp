import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import * as moment from 'moment'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: false,
    fire: []
  },
  mutations: {
    mYeniKayitEkle (state, payload) {
      state.fire.push(payload)
    },
    mSetLoading (state, payload) {
      state.loading = payload
    },
    mSetUser (state, payload) {
      state.user = payload
    },
    mYukleF (state, payload) {
      state.fire = payload
    }
  },
  actions: {
    GirisYap ({commit}, payload) {
      commit('mSetLoading', true)
      commit('mSetError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('mSetLoading', false)
            const newUser = {
              id: user.uid
            }
            commit('mSetUser', newUser)
          }
        )
        .catch(
          error => {
            commit('mSetLoading', false)
            commit('mSetError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('mSetUser', {
        id: payload.uid
      })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('mSetUser', null)
    },
    // UpDown yukleniyor
    YukleF ({commit}) {
      commit('mSetLoading', true)
      firebase.database().ref('FireUp').on('value', function (snapshot) {
        const durum = []
        const obj = snapshot.val()
        const ddate = moment().date()
        if (Number(obj.date) === ddate) {
          durum.push({
            date: obj.date,
            updown: obj.updown
          })
        } else {
          durum.push({
            date: obj.date,
            updown: 0
          })
        }
        commit('mYukleF', durum)
        commit('mSetLoading', false)
      })
/*       .catch(
        (error) => {
          console.log(error)
          commit('mSetLoading', true)
        }
      ) */
    },
 /*       commit('mYukleF', snapshot.val())
      })
    },
/*         commit('mSetLoading', false)
      })
      .catch(
        (error) => {
          console.log(error)
          commit('mSetLoading', true)
        } */
/*       commit('mSetLoading', true)
      firebase.database().ref('FireUp').once('value')
        .then((data) => {
          const durum = []
          const obj = data.val()
          const ddate = moment().date()
          if (Number(obj.date) === ddate) {
            durum.push({
              date: obj.date,
              updown: obj.updown
            })
          } else {
            durum.push({
              date: obj.date,
              updown: 0
            })
          }
          commit('mYukleF', durum)
          commit('mSetLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('mSetLoading', true)
          }
        )
 */

    YeniKayitEkle ({commit}, payload) {
      const durum = {
        date: payload.date,
        updown: payload.updown
      }
      // adreslere dikkat
      firebase.database().ref('updown').update(durum)
      // firebase.database().ref('Koyun/Canlilar/Disi').push(koyun)  koyun için
      // firebase.database().ref('vue').push(koyun) deneme için
        .then((data) => {
          const key = data.key
          commit('mYeniKayitEkle', {
            ...durum,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    clearError ({commit}) {
      commit('mSetError')
    }
  },
  getters: {
    gLoading (state) {
      return state.loading
    },
    gYukluFire (state) {
      return state.fire
    }

  }
})
