var a= "stay";
var b= "love";
var syn;
 var words= [];

function fetchData(){
    fetch(https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${a}?key=f4202a73-2937-4fd6-b68e-2954ef0d7f04).
    then(response => {
        if(!response.ok){
            console.log(response);
            throw Error("ERROR");
        }
        return response.json();
        // let wordspage= JSON.parse(words.responseText);
        // console.log(words[0]);
    }).then(data =>{
        console.log(data);
        let getKeys = Object.keys(data['0'])[0];
        let getVal = data['1']['2'];
        let getVal2 = data['3'][getKeys];
        console.log(getVal)
        console.log(getVal2)
        
        
       /* idnum=(data[0][2]);
        console.log(idnum);
        const html= data.map(user =>{
            return <p>Name:${user.id}</p>
            console.log(html);
        })*/
        document.querySelector("#app").insertAdjacentHTML("afterbegin","<h1> hellows</h1>");

    }).catch(error =>{
        console.log
questionBank= [
    {
        question : `SYNONYM OF : a`,
        option : [`b`,'c','s','s'],
        answer : `t`
    
    },
    {
        question : `SYNONYM OF : a`,
        option : [`b`,'c','s','s'],
        answer : `t`
    },
    {
        question : `SYNONYM OF : a`,
        option : [`b`,'c','s','s'],
        answer : `t`
    },
    {
        question : `SYNONYM OF : a`,
        option : [`b`,'c','s','s'],
        answer : `t`
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
function displayQuestion(){
    //api()
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function backToQuiz(){
   
    location.reload();
}

function checkAnswer(){
    //api()
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

console.log("testing")
function calcScore(e){
   //api()
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}
    
    //click events to next button
    next.addEventListener('click',nextQuestion);
}