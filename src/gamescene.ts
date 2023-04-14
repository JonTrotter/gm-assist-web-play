import Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image("logo", "./phaser3-logo.png");
  }

  create() {
    const logo = this.add.image(400, 70, "logo");

    this.tweens.add({
      targets: logo,
      y: 800 - 70,
      duration: 4000,
      ease: "Sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }
}
