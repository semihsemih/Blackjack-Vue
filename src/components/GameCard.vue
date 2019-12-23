<template>
  <div class="game-cards">
    <div
      class="item animated flipInX"
      :class="{ delayAnimate: delay }"
      v-for="card in deck"
      v-bind:key="card.id"
    >
      <img :src="require(`@/assets/img/cards/${card.id}.png`)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: ["deck"],
  computed: {
    delay: function() {
      let delay = true;
      if (this.deck.length > 2) {
        delay = false;
      }
      return delay;
    }
  }
};
</script>

<style scoped>
.delayAnimate {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
</style>
