<template>
  <div class="container">
    <div class="header mt-2 mb-5">
      <h1>Blackjack Vue</h1>
    </div>
    <div class="game-actions row mb-3 w-75">
        <div class="col-6 buttons">
          <button class="btn btn-info">New Game</button>
        </div>
        <div class="col-6 infos text-right">
          <p class="credit">Credit: $1000</p>
        </div>
    </div>
    <GameArea />
  </div>
</template>

<script>
  import GameArea from "./components/GameArea";
export default {
  name: "app",
  components: {
    GameArea
  }
};
</script>

<style>

</style>
