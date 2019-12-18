import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./assets/scss/style.css";
import VModal from "vue-js-modal";

window._ = require("lodash");

Vue.config.productionTip = false;

Vue.use(VModal, { dialog: true });

export const eventBus = new Vue({
  data: {
    gameBalance: {
      credit: 1000,
      bet: 0
    }
  },
  methods: {
    gameComponentSelector(component) {
      this.$emit("componentChange", component);
    },
    updateCredit(newCredit) {
      this.gameBalance.credit = newCredit;
    },
    updateBet(newBet) {
      this.gameBalance.bet = newBet;
    },
    resetGame() {
      this.gameBalance = {
        credit: 1000,
        bet: 0
      }
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
