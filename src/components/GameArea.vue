<template>
  <div v-show="status" class="game-area">
    <div class="croupier-area">
      <div class="game-cards">
        <div class="item" v-for="card in croupierHand" v-bind:key="card.id">
          <img :src="require(`@/assets/img/cards/${card.id}.png`)" alt="" />
        </div>
        <!--        <div class="item"><img src="../assets/img/cards/7D.png" alt="" /></div>
        <div class="item"><img src="../assets/img/cards/3S.png" alt="" /></div>
        <div class="item"><img src="../assets/img/cards/5H.png" alt="" /></div>-->
      </div>
    </div>
    <div class="player-area">
      <div class="game-cards">
        <div class="item" v-for="card in playerHand" v-bind:key="card.id">
          <img :src="require(`@/assets/img/cards/${card.id}.png`)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameArea",
  props: ["status"],
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
      croupierHand: []
    };
  },
  methods: {
    gameStart() {
      // eslint-disable-next-line no-undef
      this.turnDeck = _.cloneDeep(this.mainDeck);
      while (this.playerHand.length < 2) {
        this.pickCardForPlayer();
      }
      while (this.croupierHand.length < 2) {
        this.pickCardForCroupier();
      }
    },
    pickCardForPlayer() {
      const randomNumber = Math.floor(Math.random() * this.turnDeck.length);
      let selectedCard = this.turnDeck[randomNumber];
      this.playerHand.push(selectedCard);
      this.turnDeck.splice(this.turnDeck.indexOf(selectedCard), 1);
    },
    pickCardForCroupier() {
      const randomNumber = Math.floor(Math.random() * this.turnDeck.length);
      let selectedCard = this.turnDeck[randomNumber];
      this.croupierHand.push(selectedCard);
      this.turnDeck.splice(this.turnDeck.indexOf(selectedCard), 1);
    }
  },
  watch: {
    status: function() {
      this.gameStart();
    }
  }
};
</script>

<style scoped></style>