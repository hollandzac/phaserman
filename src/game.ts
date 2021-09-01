import 'phaser';

import startScene from './startScene';
import gameScene from './gameScene';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: [startScene, gameScene]
};

const game = new Phaser.Game(config);
