# Quizz-App

# introduction
quiz app is a multi-pages web application and fully responsive and it's about questions and answers of html and css and js and the tech i used is only html and css and pure js

# technologies
Html
CSS
Javascript

#features

in htmlTest.js--->

1. creat 3 buttons inside index page and ealch one directe to difreent page just lije html test or css test or javascript test

2. create 3 difrrent json file and each file contain the questions 
the first --> html questions 
the second --> css questions 
the third --> js questions 

3-fetch the data from json file using fetch() method and called getQuestions()

4-displayQuestions()-> start display question and it's own 4 answers using template litral to show them in html and the function taks 2 parametrs my object and number of question

5-createBullets()->start diplay bullets using template litral and the function take one paramter which is the number of questions so i can loop and display answers and call it in getQuestions()

6-TheUserAnswer()->get the user answer by get all answers and looping on it, and the checked answer set it in 
global variable which is theChoosenAnswer

7-TheRightAnswer()->creat compine function that compaire between the right answer and the choosen answer function taks 2 param theRightAnswer of each que and second is number of questions

8-handleBullets()->create function that handlle bullets so after each click on submit button i add 
class on to next span and changed color

9-countDown()->display and start time down using countDown() method and it taks 2 param 
a-first- duration or time to start count
b- second - the number of question to use it in condition after questions end time remove

10-add event click on submit button in getQuestions() and when i clicked the button 
a- get the right answer of each question and set the value in variable 
b- increase the index after click
c- invalk theUserAnswer()
d- invalk the right answer function theRightAnswer() 
e- to get next que i make question area and answer area with empty string and invalked displayQuestions() again 
f- stop time counter which start automatic after data loaded using clearInvertal()
g- start new time count uning countDown() metod to start again
h- invalk handleBullets()

11-showRsults()->create function show result so after questions end i can show the user his score and take one param questions number
a- clear all area of quiz and answers and bullets and countdown time and submit button
b- show the user rslts depends on it's choosen answer
c- show the buttons next button and restart test button 
d- handlle next button using window.location.href method to go to next test 
e- handlle restart button using windo.reload() method 

12-do the same logical code for the csstest.js and jstest.js

#setup
-all you need is any text editor just like vscode and using live server extention
