import Vue from "vue/dist/vue.js";
window.Vue = Vue;

import "./index.scss";

var App = new Vue({
  el: "#app",
  data: {
    isActive: false
  }
});
