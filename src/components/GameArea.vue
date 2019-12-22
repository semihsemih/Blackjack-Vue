<template>
  <div class="game-area">
    <v-dialog :click-to-close="false" />
    <h4 class="area-title">Croupier Hand ({{ croupierPoint }})</h4>
    <div class="croupier-area animated fadeIn">
      <GameCard :deck="croupierHand" />
    </div>
    <div class="player-area animated fadeIn">
      <GameCard :deck="playerHand" />
    </div>
    <h4 class="area-title">Player Hand ({{ playerPoint }})</h4>
    <div class="row">
      <div class="col d-flex justify-content-around">
        <div style="margin-right: 25px; color: white; font-weight: bold">
          Bet: ${{ bet }}
        </div>
        <div style="margin-left: 25px; color: white; font-weight: bold">
          Credit: ${{ credit }}
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center mt-3">
        <button type="button" class="btn btn-sm btn-primary mr-2 w-25">
          Double
        </button>
        <button type="button" class="btn btn-sm btn-primary w-25" @click="hit">
          Hit
        </button>
        <button
          type="button"
          class="btn btn-sm btn-primary ml-2 w-25"
          @click="stand"
        >
          Stand
        </button>
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
        { id: "AC", point: 11, suit: "clubs", type: "ace" },
        { id: "2C", point: 2, suit: "clubs", type: "number" },
        { id: "3C", point: 3, suit: "clubs", type: "number" },
        { id: "4C", point: 4, suit: "clubs", type: "number" },
        { id: "5C", point: 5, suit: "clubs", type: "number" },
        { id: "6C", point: 6, suit: "clubs", type: "number" },
        { id: "7C", point: 7, suit: "clubs", type: "number" },
        { id: "8C", point: 8, suit: "clubs", type: "number" },
        { id: "9C", point: 9, suit: "clubs", type: "number" },
        { id: "10C", point: 10, suit: "clubs", type: "number" },
        { id: "JC", point: 10, suit: "clubs", type: "jack" },
        { id: "KC", point: 10, suit: "clubs", type: "king" },
        { id: "QC", point: 10, suit: "clubs", type: "queen" },
        { id: "aceDiamond", point: 11, suit: "diamonds", type: "ace" },
        { id: "2D", point: 2, suit: "diamonds", type: "numbers" },
        { id: "3D", point: 3, suit: "diamonds", type: "numbers" },
        { id: "4D", point: 4, suit: "diamonds", type: "numbers" },
        { id: "5D", point: 5, suit: "diamonds", type: "numbers" },
        { id: "6D", point: 6, suit: "diamonds", type: "numbers" },
        { id: "7D", point: 7, suit: "diamonds", type: "numbers" },
        { id: "8D", point: 8, suit: "diamonds", type: "numbers" },
        { id: "9D", point: 9, suit: "diamonds", type: "numbers" },
        { id: "10D", point: 10, suit: "diamonds", type: "numbers" },
        { id: "JD", point: 10, suit: "diamonds", type: "jack" },
        { id: "KD", point: 10, suit: "diamonds", type: "king" },
        { id: "QD", point: 10, suit: "diamonds", type: "queen" },
        { id: "AH", point: 11, suit: "hearts", type: "ace" },
        { id: "2H", point: 2, suit: "hearts", type: "number" },
        { id: "3H", point: 3, suit: "hearts", type: "number" },
        { id: "4H", point: 4, suit: "hearts", type: "number" },
        { id: "5H", point: 5, suit: "hearts", type: "number" },
        { id: "6H", point: 6, suit: "hearts", type: "number" },
        { id: "7H", point: 7, suit: "hearts", type: "number" },
        { id: "8H", point: 8, suit: "hearts", type: "number" },
        { id: "9H", point: 9, suit: "hearts", type: "number" },
        { id: "10H", point: 10, suit: "hearts", type: "number" },
        { id: "JH", point: 10, suit: "hearts", type: "jack" },
        { id: "KH", point: 10, suit: "hearts", type: "king" },
        { id: "QH", point: 10, suit: "hearts", type: "queen" },
        { id: "AS", point: 11, suit: "spades", type: "ace" },
        { id: "2S", point: 2, suit: "spades", type: "number" },
        { id: "3S", point: 3, suit: "spades", type: "number" },
        { id: "4S", point: 4, suit: "spades", type: "number" },
        { id: "5S", point: 5, suit: "spades", type: "number" },
        { id: "6S", point: 6, suit: "spades", type: "number" },
        { id: "7S", point: 7, suit: "spades", type: "number" },
        { id: "8S", point: 8, suit: "spades", type: "number" },
        { id: "9S", point: 9, suit: "spades", type: "number" },
        { id: "10S", point: 10, suit: "spades", type: "number" },
        { id: "JS", point: 10, suit: "spades", type: "jack" },
        { id: "KS", point: 10, suit: "spades", type: "king" },
        { id: "QS", point: 10, suit: "spades", type: "queen" }
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
    },
    hit() {
      this.cardDealer(this.playerHand);
    },
    stand() {
      if (this.croupierPoint < 17) {
        while (this.croupierPoint < 17) {
          this.cardDealer(this.croupierHand);
        }
        if (this.croupierPoint > 21) {
          this.showWinModal();
        } else {
          if (this.croupierPoint < this.playerPoint) {
            this.showWinModal();
          } else if (this.croupierPoint > this.playerPoint) {
            this.showBustModal();
          } else if (this.croupierPoint === this.playerPoint) {
            alert("eşitlik");
          }
        }
      } else {
        if (this.croupierPoint < this.playerPoint) {
          this.showWinModal();
        } else if (this.croupierPoint > this.playerPoint) {
          this.showBustModal();
        } else if (this.croupierPoint === this.playerPoint) {
          alert("eşitlik");
        }
      }
    },
    showBustModal() {
      this.$modal.show("dialog", {
        title: "Bust",
        text: "You Bust! Dealer Wins!",
        buttons: [
          {
            title: "Quit Game",
            handler: () => {
              eventBus.resetGame();
              eventBus.gameComponentSelector("StartScreen");
            }
          },
          {
            title: "Go On",
            default: true,
            handler: () => {
              eventBus.gameComponentSelector("StartBetArea");
            }
          }
        ]
      });
    },
    showWinModal() {
      this.$modal.show("dialog", {
        title: "Win",
        text: `Dealer Lost! Your Return $${this.bet + this.bet}`,
        buttons: [
          {
            title: "Quit Game",
            handler: () => {
              eventBus.resetGame();
              eventBus.gameComponentSelector("StartScreen");
            }
          },
          {
            title: "Go On",
            default: true,
            handler: () => {
              eventBus.updateCredit(this.bet + this.bet + this.credit);
              eventBus.gameComponentSelector("StartBetArea");
            }
          }
        ]
      });
    },
    showBlackjackModal() {
      this.$modal.show("dialog", {
        title: "Blackjack! You Win!",
        text: `Dealer Lost! Your Return $${this.bet + this.bet * 1.5}`,
        buttons: [
          {
            title: "Quit Game",
            handler: () => {
              eventBus.resetGame();
              eventBus.gameComponentSelector("StartScreen");
            }
          },
          {
            title: "Go On",
            default: true,
            handler: () => {
              eventBus.updateCredit(this.bet + this.bet * 1.5 + this.credit);
              eventBus.gameComponentSelector("StartBetArea");
            }
          }
        ]
      });
    }
  },
  computed: {
    playerPoint: function() {
      let point = 0;
      let aceTypeCard = 0;
      this.playerHand.forEach(card => {
        if (card.type === "ace") aceTypeCard = aceTypeCard + 1;
        point = point + card.point;
      });
      if (aceTypeCard > 1) {
        if (point > 21) {
          point = point - aceTypeCard * 10;
          if (point > 21) {
            this.showBustModal();
          }
        }
      } else if (aceTypeCard === 1) {
        if (point > 21) {
          point = point - 10;
          if (point > 21) {
            this.showBustModal();
          }
        }
      } else {
        if (point > 21) {
          this.showBustModal();
        }
      }
      if (this.playerHand.length === 2 && point === 21) {
        // eslint-disable-next-line vue/no-async-in-computed-properties
        setTimeout(() => {
          this.showBlackjackModal();
        }, 2000);
      }

      return point;
    },
    croupierPoint: function() {
      let point = 0;
      let aceTypeCard = 0;
      this.croupierHand.forEach(card => {
        if (card.type === "ace") aceTypeCard = aceTypeCard + 1;
        point = point + card.point;
      });
      if (aceTypeCard > 1) {
        if (point > 21) {
          point = point - aceTypeCard * 10;
          if (point > 21) {
            this.showWinModal();
          }
        }
      } else if (aceTypeCard === 1) {
        if (point > 21) {
          point = point - 10;
          if (point > 21) {
            this.showWinModal();
          }
        }
      } else {
        if (point > 21) {
          this.showWinModal();
        }
      }
      return point;
    }
  },
  components: {
    GameCard
  },
  created() {
    this.gameStart();
    this.bet = eventBus.$data.gameBalance.bet;
    this.credit = eventBus.$data.gameBalance.credit;
  }
};
</script>

<style scoped>
.area-title {
  color: wheat;
  font-weight: bold;
}
</style>