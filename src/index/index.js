import Vue from "vue/dist/vue.js";
window.Vue = Vue;

import "./index.scss";

var App = new Vue({
  el: "#app",
  data: {
    isActive: false,
    scrollPosition: null,
    isActiveSctoll: false
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 20) {
        this.isActiveSctoll = true;
      } else {
        this.isActiveSctoll = false;
      }
    }
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
});
