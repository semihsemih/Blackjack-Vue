<template>
  <div class="container">
    <v-dialog />
    <div class="row">
      <div class="col-12 mb-5">
        <draggable
          class="dragArea d-flex justify-content-center"
          :list="chips"
          :group="{ name: 'total', pull: 'clone', put: false }"
        >
          <div class="" v-for="element in chips" :key="element.id">
            <img :src="element.imgSrc" alt="" class="img-fluid" />
          </div>
        </draggable>
      </div>

      <div class=" bet-area col-12">
        <draggable
          class="dragArea d-flex justify-content-center"
          :list="bets"
          group="total"
          @change="betCalculate"
        >
          <div class="" v-for="element in bets" :key="element.id">
            <img :src="element.imgSrc" alt="" class="img-fluid" />
          </div>
        </draggable>
      </div>
      <div class="col-12 mt-5">
        <p class="text-center text-white">Total Bet: ${{ totalBet }}</p>
      </div>
      <div class="col-12 mt-2">
        <p class="text-center text-white">
          Your Credit: ${{ remainingCredit }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <button class="btn btn-primary" @click="startGame">
          Deal!!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { eventBus } from "../main";
import chip20 from "../assets/img/chips/chip-20-removebg-preview.png";
import chip50 from "../assets/img/chips/chip-50-removebg-preview.png";
import chip100 from "../assets/img/chips/chip-100-removebg-preview.png";
import chip200 from "../assets/img/chips/chip-200-removebg-preview.png";
export default {
  name: "StartBetArea",
  display: "Clone",
  order: 2,
  components: {
    draggable
  },
  data() {
    return {
      chips: [
        { point: 20, imgSrc: chip20 },
        { point: 50, imgSrc: chip50 },
        { point: 100, imgSrc: chip100 },
        { point: 200, imgSrc: chip200 }
      ],
      bets: [],
      totalBet: 0,
      credit: 0
    };
  },
  methods: {
    betCalculate: function() {
      this.totalBet = 0;
      this.bets.forEach(bet => {
        this.totalBet = bet.point + this.totalBet;
        if (this.totalBet > this.credit) {
          this.insufficientBalanceAlertModal();
          this.totalBet = this.totalBet - bet.point;
          this.bets.pop();
        }
      });
    },
    insufficientBalanceAlertModal() {
      this.$modal.show("dialog", {
        title: "Alert!",
        text: "Your balance is insufficient for this bet!",
        buttons: [
          {
            title: "Ok"
          }
        ]
      });
    },
    requiredBetAlertModal() {
      this.$modal.show("dialog", {
        title: "Alert!",
        text: "You must bet to enter the game!",
        buttons: [
          {
            title: "Ok"
          }
        ]
      });
    },
    startGame() {
      if (this.totalBet > 0) {
        eventBus.updateCredit(this.remainingCredit);
        eventBus.updateBet(this.totalBet);
        eventBus.gameComponentSelector("GameArea");
      } else {
        this.requiredBetAlertModal();
      }
    }
  },
  computed: {
    remainingCredit: function() {
      return this.credit - this.totalBet;
    }
  },
  created() {
    this.credit = eventBus.$data.gameBalance.credit;
  }
};
</script>

<style scoped>
.bet-area {
  border: 1px solid white;
  border-radius: 125px;
  min-height: 125px;
  height: auto;
}
.bet-counter {
  color: white;
  font-size: 4rem;
}
</style>
