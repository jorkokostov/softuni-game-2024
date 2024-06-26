import { state } from "./game-state.js";
import{ factory } from "./game-objects.js"
import { config } from "./game-config.js";

const gameScore = document.querySelector('.game-score');
//Game frames
function newFrame() {
  //Move wizard
  modifyWizardPosition();

  //Modify fireballs
  const fireballs = document.querySelector('.fireball');
  for (const fireball of fireballs) {
    fireball.style.left = fireball.offsetLeft + config.magicSpeed + 'px';
  }

  //apply score
  state.score+= config.timePoints;
  gameScore.textContent = state.score + 'pts.';

  //Game over ckeck
  if(!state.isGameOver){
    window.requestAnimationFrame(newFrame);
  }
}

//TODO: Fix acceleration on diagonals
function modifyWizardPosition() {
  const wizardElement = document.getElementById('wizard');
  const gameArea = document.querySelector('.game-area')

  const { wizard } = state;

  //wizard movement
  if(state.controls.KeyA && wizard.x > 0){
    wizardElement.style.left = `${wizard.x-=config.speed}px`;
  }
  if(state.controls.KeyD && wizard.x + wizard.width < gameArea.offsetWidth){
    wizardElement.style.left = `${wizard.x+=config.speed}px`;
  }
  if(state.controls.KeyW && wizard.y > 0){
    wizardElement.style.top = `${wizard.y-=config.speed}px`;
  }
  if(state.controls.KeyS && wizard.y + wizard.height < gameArea.offsetHeight){
    wizardElement.style.top = `${wizard.y+=config.speed}px`;
  }
  if(state.controls.Space) {
    wizardElement.style.backgroundImage = 'url("images/wizard-fire.png")';

    //create fireball
    factory.createFireball(wizard);
  }else {
    wizardElement.style.backgroundImage = 'url("images/wizard.png")';
  }
}

export const engine = {
  start() {
    window.requestAnimationFrame(newFrame);
  }
}