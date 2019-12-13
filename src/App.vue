<template>
  <div class="container">
    <div class="header mt-2 mb-5">
      <h1>Blackjack Vue</h1>
    </div>
    <div class="game-actions row mb-3 w-75">
      <div class="col-6 buttons">
        <button v-show="!gameStatus" class="btn btn-info" @click="gameStatus = true">New Game</button>
        <button v-show="gameStatus" class="btn btn-info mr-4">Hit!</button>
        <button v-show="gameStatus" class="btn btn-info">Double Down</button>
      </div>
      <div class="col-6 infos text-right">
        <p class="credit">Credit: $1000</p>
      </div>
    </div>
    <GameArea :status="gameStatus"/>
  </div>
</template>

<script>
import GameArea from "./components/GameArea";
export default {
  name: "app",
  data() {
    return {
      gameStatus: false
    };
  },
  components: {
    GameArea
  }
};
</script>

<style></style>
