<template>
  <div class="game-area">
    <h4 class="area-title">Croupier Hand</h4>
    <div class="croupier-area animated fadeIn">
      <GameCard :deck="croupierHand" />
    </div>
    <div class="player-area animated fadeIn">
      <GameCard :deck="playerHand" />
    </div>
    <h4 class="area-title">Player Hand</h4>
    <div class="row">
      <div class="col d-flex justify-content-around">
        <div style="margin-right: 25px; color: white; font-weight: bold">
          Bet: ${{ bet }}
        </div>
        <div style="margin-left: 25px; color: white; font-weight: bold">
          Credit: ${{ credit }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
import GameCard from "./GameCard";
export default {
  name: "GameArea",
  data() {
    return {
      mainDeck: [
        { id: "AC", point: 11 },
        { id: "2C", point: 2 },
        { id: "3C", point: 3 },
        { id: "4C", point: 4 },
        { id: "5C", point: 5 },
        { id: "6C", point: 6 },
        { id: "7C", point: 7 },
        { id: "8C", point: 8 },
        { id: "9C", point: 9 },
        { id: "10C", point: 10 },
        { id: "JC", point: 10 },
        { id: "KC", point: 10 },
        { id: "QC", point: 10 },
        { id: "AD", point: 11 },
        { id: "2D", point: 2 },
        { id: "3D", point: 3 },
        { id: "4D", point: 4 },
        { id: "5D", point: 5 },
        { id: "6D", point: 6 },
        { id: "7D", point: 7 },
        { id: "8D", point: 8 },
        { id: "9D", point: 9 },
        { id: "10D", point: 10 },
        { id: "JD", point: 10 },
        { id: "KD", point: 10 },
        { id: "QD", point: 10 },
        { id: "AH", point: 11 },
        { id: "2H", point: 2 },
        { id: "3H", point: 3 },
        { id: "4H", point: 4 },
        { id: "5H", point: 5 },
        { id: "6H", point: 6 },
        { id: "7H", point: 7 },
        { id: "8H", point: 8 },
        { id: "9H", point: 9 },
        { id: "10H", point: 10 },
        { id: "JH", point: 10 },
        { id: "KH", point: 10 },
        { id: "QH", point: 10 },
        { id: "AS", point: 11 },
        { id: "2S", point: 2 },
        { id: "3S", point: 3 },
        { id: "4S", point: 4 },
        { id: "5S", point: 5 },
        { id: "6S", point: 6 },
        { id: "7S", point: 7 },
        { id: "8S", point: 8 },
        { id: "9S", point: 9 },
        { id: "10S", point: 10 },
        { id: "JS", point: 10 },
        { id: "KS", point: 10 },
        { id: "QS", point: 10 }
      ],
      turnDeck: null,
      playerHand: [],
      croupierHand: [],
      bet: null,
      credit: null
    };
  },
  methods: {
    gameStart() {
      // eslint-disable-next-line no-undef
      this.turnDeck = _.cloneDeep(this.mainDeck);
      while (this.playerHand.length < 2) {
        this.cardDealer(this.playerHand);
      }
      while (this.croupierHand.length < 2) {
        this.cardDealer(this.croupierHand);
      }
    },
    cardDealer(hand) {
      const randomNumber = Math.floor(Math.random() * this.turnDeck.length);
      let selectedCard = this.turnDeck[randomNumber];
      hand.push(selectedCard);
      this.turnDeck.splice(this.turnDeck.indexOf(selectedCard), 1);
    }
  },
  components: {
    GameCard
  },
  created() {
    this.gameStart();
    this.bet = eventBus.$data.bet;
    this.credit = eventBus.$data.credit;
  }
};
</script>

<style scoped>
.area-title {
  color: wheat;
  font-weight: bold;
}
</style>
