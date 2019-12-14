<template>
  <div class="game-cards">
    <div
      class="item animated flipInX"
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
  props: ["deck"]
};
</script>

<style scoped></style>
