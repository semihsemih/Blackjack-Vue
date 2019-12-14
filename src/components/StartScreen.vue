<template>
  <div class="row justify-content-center">
    <div class="col-md-6 animated zoomIn">
      <img
        src="../assets/img/cards/aces.png"
        class="img-fluid"
       alt="aces in my hand"/>
    </div>
    <div class="col-12 mt-5 d-flex justify-content-center animated fadeIn delay-1s">
      <button class="btn btn-primary" @click="startGame">New Game</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "StartScreen",
  methods: {
    startGame() {
        eventBus.$emit("changeComponent", "GameArea");
    }
  }
};
</script>

<style scoped></style>
