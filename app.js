//Logic

var score = 0;
var playerChoice;
var readable = {
  '0': 'Rock',
  '1': 'Paper',
  '2': 'Scissors',
};

var cpuChoice = {
  init: function() {
    this.store = Math.floor(Math.random() * 3);
    this.text = readable[this.store];
  },
  store: '',
  text: ''
};

//Order of winning
var order = [0, 1, 2, 0];

//Choose a winner
//console.log(chooseWinner(1,0));
var chooseWinner = function(player, cpu) {
  if(order[player] === order[cpu]) {
    return 'Draw! Try again?';
  }
  if(order[player] === order[cpu + 1]) {
    score++;
    return 'You won!';
  } else {
    score--;
    return 'You lost :(';
  }
}

//UI

//having only one <p> in index.html we don't need to use id
var paragraph = document.querySelector('p');

var assignClick = function(element, position) {
  //assign a click listener
  element.addEventListener('click', function() {
    //set the player choice
    playerChoice = position;
    //computer picks
    cpuChoice.init();
    //print out what picked a computer
    paragraph.innerText = '\nThe computer chose: ' + cpuChoice.text;
    //determine a winner
    paragraph.innerText += '\n\n' + chooseWinner(playerChoice, cpuChoice.store);
    //display a score
    paragraph.innerText += '\n\n' + 'SCORE: ' + score;
  });
}

var images = {
  tags: document.getElementsByTagName('img'),
  init: function() {
    for(var step = 0; step < this.tags.length; step++) {
      assignClick(this.tags[step], step);
    }
  }
}

images.init();
