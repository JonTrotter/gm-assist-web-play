<script setup lang="ts">
import Phaser from "phaser";
import config from "../phaserConfig";
import GameScene from "../gamescene";

new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene],
  })
);
</script>

<template>
  <div class="flex">
    <p style="height: 800px">yooooo</p>

    <div class="game"></div>

    <p>yooooo</p>
  </div>
</template>
<style>
.flex {
  display: flex;
}
.game-container {
  overflow-y: scroll;
}
</style>
