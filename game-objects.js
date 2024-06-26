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
  }
}