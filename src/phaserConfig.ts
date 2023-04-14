import Phaser from "phaser";

export default {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#000000",
  scale: {
    width: 800,
    height: 800,
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.NONE,
  },
};
