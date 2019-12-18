<template>
  <div class="container">
    <div class="header mt-2 mb-5">
      <h1>Blackjack Vue</h1>
    </div>
    <transition-group name="slideContainer" mode="out-in">
    <component key="mainComponent" :is="activeComponent" />
    </transition-group>
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
    eventBus.$on("componentChange", component => {
      this.activeComponent = component;
    });
  }
};
</script>

<style>
  .slideContainer-enter-active{
    animation: slide-in 1s ease-out forwards;
  }
  .slideContainer-leave-active{
    animation: slide-out 1s ease-out forwards;
  }

  @keyframes slide-in {
    from{
      transform: translateY(-1000px);
      opacity: 0;
    }
    to{
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from{
      transform: translateY(0px);
      opacity: 1;
    }
    to{
      transform: translateY(1000px);
      opacity: 0;
    }
  }
</style>
