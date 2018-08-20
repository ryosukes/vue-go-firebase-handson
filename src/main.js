// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'API_KEY',
  authDomain: 'DOMAIN.firebaseapp.com',
  databaseURL: 'DOMAIN.firebaseio.com',
  projectId: 'PROJECT_ID',
  storageBucket: 'BUCKET_ID.appspot.com',
  messagingSenderId: 'SENDER_ID'
}
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
