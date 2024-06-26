//State initialization
const state = {
  player: 'Gosho',
  wizard: {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
  },
  isGameOver: false,
};
  
//Game object creation
const gameArea = document.querySelector('.game-area')
const factory = {
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

//Input controll

//Game loop


//Game frames
function newFrame() {
  const wizardElement = document.getElementById('wizard');

  wizardElement.style.left = `${state.wizard.x++}px`;
  if(!state.isGameOver){
    window.requestAnimationFrame(newFrame);
  }
 
}

//Start game
const startElement = document.querySelector('.game-start');
startElement.addEventListener('click', (e) => {
  //Hide start element
  e.currentTarget.classList.add('hidden');

  //Initializa game
  factory.createWizard(state.wizard);

  //Start game
  window.requestAnimationFrame(newFrame);
})