# Code-Quiz
Code-Quiz is an interactive application where users have the opportunity to test their JavaScript knowledge in a 5-question, multiple-choice quiz.

## Description
Upon entering the application, users will be greeted with a brief disclaimer about the quiz along with a button entitled "Start Quiz".

A navbar has been established on the page & serves two purposes:
    1. The left side features a link that allows users to navigate to the highscores page.
    2. The right side features a timer. Important note -- time does not begin until user clicks the "Start Quiz" button. 

As soon as the user clicks the "Start Quiz" button, they are immediately taken to the first question of the 5-part quiz. Moreover, the timer, initially set to 60 seconds, begins decrementing. The user is taken through the quiz (each question is presented only after the user selects an answer). Incorrect answers will penalize the user's score-time by 15 seconds. 

Upon making it through all 5 questions OR once the timer reaches zero, the user is then presented with a new interface displaying the final score -- in this case, the final count on the timer. Secondly, there is an input box where the user can submit his or her initials to have the final score stored on the highscores page.

The highscores page utilizes local storage to store the user's initials and corresponding score. This content is removed as soon as the user clicks the "Clear Highscores" button and subsequently refreshes the page. 


## Visuals

## Link to Deployed Application
https://barrettpope.github.io/Code-Quiz/

## Support
For questions, comments or concerns regarding the Code-Quiz application, please email barrettpope94@gmail.com.

## Contributing
Pull requests are welcome.