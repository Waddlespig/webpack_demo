// import Vue from 'vue';
//
// var app = new Vue({
//   el: '#app',
//   data: {
//     msg: 'app'
//   }
// });
import './assets/index.css';

const greeter = require('./Greeter.js');
document.querySelector("#app").appendChild(greeter());
