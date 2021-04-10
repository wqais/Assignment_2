var chalk = require('chalk')
var readlineSync = require('readline-sync')

console.log(chalk.bgBlack.red('Welcome To The Office Trivia! '))
var userName = readlineSync.question("Please Enter Your Name: ")
console.log(chalk.blue("Hello ") + chalk.blue(userName))

console.log(`The rules of this trivia are simple:
1.There are a total of 10 questions.
2.Questions 1-9 carry 1 point each.
3.The 10th question is optional. It is the most difficult question, if you answer it correctly. you will GAIN 5 POINTS!! However if u answer it incorrectly, you will LOSE 5 POINTS. So, choose wisely, there is no going back if you opt in for it!
4.Please enter your answer in Lower Case.
---------------`)

var highScore = [
  {name: "Qais",
  score: 14},
  {name: "Umair",
  score: 14}
]

score = 0
let questionIndex = 0

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
    console.log(chalk.green('Yay! Your answer is correct. You gained a point.'))
    score++
    console.log("Your current score is " + chalk.cyan(score))
    console.log("---------------")
  } else {
    console.log(chalk.red('Oops! Your answer is incorrect.'))
    console.log("Your current score is " + chalk.cyan(score))
    console.log("The correct answer is: " + currentQuestion.answer)
    console.log("---------------")
  }
}

var qseries =[ 
  {question: `
  1. How many copies of The Ultimate Guide to Throwing a Garden Party by James Trickington did Jim sell?
  a: 28
  b: 6
  c: 1
  d: 11
  Enter your answer: ` ,
   answer: "c"
  },
  {question: `
  2. What is the name of the action film written and directed by Michael Scott?
  a: Warehouse Warriors
  b: The Adventures of Prison Mike
  c: Michael Scarn Returns
  d: Threat Level Midnight
  Enter your answer: `,
   answer : "d"},
  {question: `
  3. What did Michael promise to give to elementary students called Scott’s Tots?
   a: College Tuition
   b: A job at Dundler Mifflin inc.
   c: Video Games
   d: New Cars
   Enter your answer: `,
   answer : "a"},
  {question:`
  4. What are the annual in-office awards called?
   a: The Scotties
   b: The Dundies
   c: The Mufflies
   d: The Pappies
   Enter your answer: `,
   answer : "b"},
  {question:`
  5. Toby Flenderson was a juror on what infamous murder case?
   a: The Manager Killer
   b: The Jersey Jabber
   c: The Scranton Strangler
   d: The Mifflin Murderer
   Enter your answer: `,
   answer : "c"},
  {question:`
  6. Where does Michael break up with Pam’s mom?
    a: The hospital when Cece is born
    b: Jim and Pam's wedding
    c: At the office
    d: At Helene's birthday party
    Enter your answer: `,
   answer : "d"},
  {question:`
  7. What does Kevin say after Kelly yells that her middle name is Rajnigandha and that she hates it? 
   a: What is Rajnigandha
   b: Nice
   c: I thought Rajnigandha was a boy's name
   d: What an awful name
   Enter your answer: `,
   answer : "c"},
  {question:`
  8. In the first episode of The Office who started their first day at Dunder Mifflin Scranton?
  a: Michael Scott
  b: Ryan Howard
  c: Dwight Schrute
  d: Oscar Martinez
  Enter your answer: `,
   answer : "b"},
  {question:`
  9. What username does Michael choose for his dating profile?
  a: World's Best Boss
  b: Michael Scarn
  c: Jim Schrute
  d: Little Kid Lover
  Enter your answer: `,
   answer: "d"}  
]

for( var i = 0; i < qseries.length; i++){
  var currentQuestion = qseries[i]
  quiz(currentQuestion.question, currentQuestion.answer)
}


function serve() {
		console.log(chalk.bgBlack.red('Congratulations on attempting the first 9 questions! \n Your score is: ') + chalk.bgBlack.green(score))
    var userInput = readlineSync.question(chalk.yellow('Would you like to attempt the 10th question? As mentioned in the rules, you may gain or lose 5 points if you answer the question correctly or incorrectly rspectively. Press c to continue or press enter to discontinue the trivia. The 10th question is quite difficult!! \n'))
    
   
   if(userInput === "c" ){
  console.log(`10. In the epiosde where Michael hit Meredith with his car, a marathon was held. What was the name of the marathon?
  a: Michael Scott Organized Meredith Palmer Forgive Me For Breaking Your Groin Race
  b: Fun Run
  c:Michael Scott's Dunder Mifflin Scranton Meredith Palmer Memorial Celebrity Rabies Awareness Pro-Am Fun Run Race for the Cure
  d: Michael Scott Dunder Mifflin Scranton Meredith Palmer Memorial Charity Fun Run Rabies Awareness Race
  `)
  var userChoice = readlineSync.question("Enter your answer: ")
  if(userChoice === "c"){
    console.log(chalk.green('YAY!!! Your answer is correct! You gained 5 points!!!'))
    score = score + 5
    console.log("Your Final Score is: " + chalk.cyan(score))
    console.log(chalk.bgBlack.red('Thank You for participating in The Office Trivia. Let me know your final scores!!! Hope you did well!'))}
    else{
    console.log(chalk.red('Oops! Your answer is incorrect! You lost 5  points :-('))
    score = score - 5
    console.log("Your Final Score is: " + chalk.cyan(score))
  }
}else{
  console.log(chalk.bgBlack.red('Thank you for participating in the The Office Trivia. Your Final Score is: ') + chalk.bgBlack.green(score))
  console.log(chalk.bgBlack.red('Let me know your final scores!!! Hope you did well!'))}
}

serve()