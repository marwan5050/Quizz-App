const headQuiz = document.getElementById("head-quiz").innerHTML = `html`;
let quizArea = document.querySelector(`.quiz-question`);
let answerArea = document.querySelector(`.answer-area`);
let spanArea = document.querySelector(`.quiz-info .spans`);
let sumBut = document.querySelector(".submit");
let timeContainer = document.querySelector(".time-down");
let rsltContainer = document.querySelector(".ruslts");
let dirLocation = document.querySelector(".dir");
let nextBut = document.querySelector(".next");
let restBut = document.querySelector(".reld");
let theChoosenAnswer;
let timeInterval;
let currentIndex = 0;
let score = 0;




async function getQuestions(){
    
   let myData = await fetch(`../js/htmlQuestions.json`);

   let myResponse = await myData.json();

   let questionsNum = myResponse.length;

    // console.log(questionsNum);

    dispalyQuestions(myResponse[currentIndex] , questionsNum);

    createBullets(questionsNum);

    // strart time down after data loaded
    countDown(5 , questionsNum);

    sumBut.addEventListener("click" , function(){


        // the right answer of each question
        let theCorrectAnswer = myResponse[currentIndex].right_answer;

        // increase index
        currentIndex++;

        // get the user answer
        TheUserAnswer();

        // compine answers function
        TheRightAnswer(theCorrectAnswer , questionsNum);

        // getting next question
        // first clear the question and answer area
        quizArea.innerHTML = ``;
        answerArea.innerHTML = ``;
        // second call diplay question function again
        dispalyQuestions(myResponse[currentIndex] , questionsNum);

        // handlle bullets
        handleBullets();

        // start new timer for next question
        // first stop timer after clicking the buttom
        clearInterval(timeInterval);
        // then start new  timer for next one
        countDown(5 , questionsNum);

        // show results
        showRsults(questionsNum);
    });


};

getQuestions();


function dispalyQuestions(obj , count){

    if(currentIndex < count){

        let queContainer = ``;
        let answerContainer = ``;

    queContainer = `<h2>${obj.title}</h2>`;

    quizArea.innerHTML = queContainer;


    // get all answers

    for(let i =1; i <= 4; i++){
        answerContainer += `<div class="answer">
        ${i === 1 ? `<input type="radio" id="answer_${i}" data-answer= "${obj[`answer_${i}`]}" name="questions" checked >` : `<input type="radio" id="answer_${i}" data-answer= "${obj[`answer_${i}`]}" name="questions" >` }
        <label for="answer_${i}">${obj[`answer_${i}`]}</label>
    </div>`

    };

    answerArea.innerHTML = answerContainer;

     
   };

};

// create and display bullets

function createBullets(num){

    let spanContainer =``;

    for(let i =0 ; i < num; i++){

        spanContainer += `${i === 0 ? `<span class="on" ></span>`  : `<span></span>` }`;
    };

    spanArea.innerHTML = spanContainer;
};


// get the user answer

function TheUserAnswer(){

    let allAnswers = document.getElementsByName("questions");

    for(let i =0; i < allAnswers.length; i++){


        if(allAnswers[i].checked){
            theChoosenAnswer = allAnswers[i].getAttribute('data-answer');

        }

    };
};

// create function to compine between the right answer and the user answer

function TheRightAnswer(correct , count){


    if(theChoosenAnswer === correct){

        score++;
        
    } 
    // else{
    //     console.log('no')
       
    // };


};

// create handlle bullets

function handleBullets(){

    let allBullets = document.querySelectorAll(`.spans span`);

   for(let i =0; i < allBullets.length; i++){

        if(i === currentIndex){

            allBullets[i].classList.add('on');
        };
   };
};

// create function countDown timer

function countDown(duration , count){

    if(currentIndex < count){

        let minutes;
        let seconds;
      
      timeInterval =  setInterval(() => {
            
            minutes = Math.floor(duration / 60);
            seconds = duration % 60;

            minutes = minutes < 10 ? `0${minutes}`: minutes;
            seconds = seconds < 10 ? `0${seconds}`: seconds;

            timeContainer.innerHTML = `<span style="color:tomato;font-size:22px"> ${minutes}:${seconds}</span>`;

            if(duration > 0 ){

                duration--;
            }
            else{
                clearInterval(timeInterval);

                // after time finshed submit dynamic to get next question
                sumBut.click();
            }
        }, 1000);

    };
};

// create show results

function showRsults(count){

    let rslt;

    if(currentIndex === count){

        quizArea.innerHTML = ``;
        answerArea.innerHTML = ``;
        spanArea.innerHTML = ``;
        timeContainer.innerHTML = ``;
        sumBut.remove();


        if(score > count / 2 && score <count){

            rslt = `<p> good your score is ${score} from ${count} </p>`;
        }
        else if(score === count){
            rslt = `<p> perfect your score is ${score} from ${count} </p>`;
        }
        else{
            rslt = `<p> bad your score is ${score} from ${count} </p>`;
        }

        rsltContainer.innerHTML = rslt;
        rsltContainer.style.cssText = `display: block`;
        dirLocation.style.cssText = `display:flex`;

        // go to next test
        nextBut.addEventListener("click" , function(){
            window.location.href = `../cssTest.html`;
        });

        // reload the crrent document
        restBut.addEventListener("click" , function(){
            window.location.reload();
        });

    };
};
