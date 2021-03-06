import Vue from 'vue'
import {VueReCaptcha} from '../../src/ReCaptchaVuePlugin'

Vue.use(VueReCaptcha, {siteKey: '6LfC6HgUAAAAAEtG92bYRzwYkczElxq7WkCoG4Ob'})

new Vue({
  methods: {
    recaptcha() {
      console.log('recaptcha clicked')
      this.$recaptchaLoaded().then(() => {
        console.log('recaptcha loaded')
        this.$recaptcha('login').then((token: string) => {
          console.log(token) // Will print the token
        })
      })
    }
  },
  template: '<button @click="recaptcha">Execute recaptcha</button>'
}).$mount('#inject')
