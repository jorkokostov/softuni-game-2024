//Game object creation
const gameArea = document.querySelector('.game-area')
export const factory = {
  createWizard(wizard){
    //create element
    const wizardElement = document.createElement('div');
    wizardElement.id = 'wizard';

    //set styles
    wizardElement.style.width = wizard.width + 'px';
    wizardElement.style.height = wizard.height + 'px';
    wizardElement.style.backgroundImage = 'url("images/wizard.png")';
    wizardElement.style.backgroundSize = 'contain';
    wizardElement.style.backgroundRepeat = 'no-repeat';
    wizardElement.style.backgroundPosition = 'center';

   

    //set position
    wizardElement.style.position = 'absolute';
    wizardElement.style.left = wizard.x + 'px';
    wizardElement.style.top = wizard.y + 'px';

    //Attach to DOM
    gameArea.appendChild(wizardElement);
  },
  createFireball(wizard) {
    //check cooldown
    if(wizard.lastMagicUse + wizard.cooldown > Date.now()){
      return;
    }
    //create element
    const fireballElement = document.createElement('div');
    fireballElement.classList.add('fireball');

    //Styles
      fireballElement.style.backgroundImage = 'url("images/fire-ball.png")';
      fireballElement.style.backgroundSize= 'contain';
      fireballElement.style.backgroundRepeat= 'no-repeat';
      fireballElement.style.backgroundPosition= 'center';
      fireballElement.style.width= '10px';
      fireballElement.style.height= '10px';
      fireballElement.styleposition= 'absolute';

    //position
    fireballElement.style.left = wizard.x + wizard.width + 'px';
    fireballElement.style.top = wizard.y + wizard.width / 2 + 'px';

    //modify wizard
    wizard.lastMagicUse = Date.now()

    //add to DOM
    gameArea.appendChild(fireballElement);
  }
}