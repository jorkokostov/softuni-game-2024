//State initialization
export const state = {
  player: 'Gosho',
  wizard: {
    x: 100,
    y: 100,
    width: 60,
    height: 60,
    lastMagicUse: 0,
    cooldown: 500,
  },
  isGameOver: false,
  score: 0,
  controls: {
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyW: false,
    Space: false,
  },
  lastBugSpawn: 0,
  maxBugSpawnTime: 20000,
};