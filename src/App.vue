<template>
  <div class="container">
    <div class="header mt-2 mb-5">
      <h1>Blackjack Vue</h1>
    </div>
    <component :is="activeComponent" />
  </div>
</template>

<script>
import { eventBus } from "./main";
import StartScreen from "./components/StartScreen";
import StartBetArea from "./components/StartBetArea";
import GameArea from "./components/GameArea";
export default {
  name: "app",
  data() {
    return {
      activeComponent: "StartScreen"
    };
  },
  components: {
    StartScreen,
    StartBetArea,
    GameArea
  },
  created() {
    eventBus.$on("changeComponent", component => {
      this.activeComponent = component;
    });
  }
};
</script>

<style></style>
