// Magic Eight Ball program

// Step 1
let userName = ''; // Empty string by default

// Step 2
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Step 3
let userQuestion = 'Will I be successful?'; // Change the question if needed

// Step 4
let randomNumber = Math.floor(Math.random() * 8);

// Step 5
let eightBall = '';

// Step 6
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Invalid response';
}

// Step 7
console.log(`The user asked: ${userQuestion}`);
console.log(`The Magic Eight Ball's answer: ${eightBall}`);
