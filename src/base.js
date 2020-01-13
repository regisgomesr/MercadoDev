const config = {
    apiKey: "AIzaSyBImxrYkgbV2tHp6g8-5BLjFl_MHD75jqw",
    authDomain: "mercadodev-b40cc.firebaseapp.com",
    databaseURL: "https://mercadodev-b40cc.firebaseio.com",
    projectId: "mercadodev-b40cc",
    storageBucket: "mercadodev-b40cc.appspot.com",
    messagingSenderId: "624819236921",
    appId: "1:624819236921:web:6ee74d019050e6124ddde8"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export default base