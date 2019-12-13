import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.css";

window._ = require("lodash");

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
