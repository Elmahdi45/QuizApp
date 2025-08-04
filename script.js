const questions=[
    {
         question:"Wich is the largest animal in the world ?",
         answers:[
             
                    { text: "Shark", correct: false },
                    { text: "Whale", correct: true },
                    { text: "Giraffe", correct: false }

             
         ]

    },

    {
         question:"What is the biggest number",
         answers:[
             
                 {text: "1",correct:false},
                 {text: "15",correct:false},
                 {text: "90",correct:true},
             
         ]

    },

    {
          question:"Smallest number?",
         answers:[
             
                 {text: "4",correct:false},
                 {text: "-7",correct:true},
                 {text: "17",correct:false},
             
         ]
    }
];

const quest=document.getElementById("quest");
const answer=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-button");
const start=document.getElementById("start-button");

const quizz = document.querySelector(".quizz");


start.addEventListener("click",()=>{
     start.style.display="none";
     quizz.style.display="block";
     showQuestion();

})

let index=0;
let questionNumber=0;
let score=0;

function showQuestion() {
    const currentQuestion=questions[index]; 
    quest.textContent= questionNumber+1 +"."+ currentQuestion.question;
    answer.innerHTML = ""; 
    nextButton.style.display="block";


    
    currentQuestion.answers.forEach(ans=>{
        const button=document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add("btn");
 
        answer.appendChild(button);


        
         button.addEventListener("click" ,()=> {

         if(ans.correct==true){
             button.style.background="green";
             score++;
         }
         else{
             button.style.background="Red";
             let p=document.createElement("p")
             p.textContent="Wrong!! try next question";
             p.style.color="red";
             answer.appendChild(p);
         }
         Array.from(answer.children).forEach(btn=>btn.disabled=true);
       });
    })
    
}

function nextClicked(){
     index++;
     
     questionNumber++;
     showQuestion();
}

nextButton.addEventListener("click",()=>{
     if(questionNumber<3){
         nextClicked();
     }
     else{
                nextButton.style.display = "none";
                
                quest.textContent = "Quiz Finished!";

                const scoreText = document.createElement("h1");
                scoreText.textContent = `Your Score: ${score}`;
        
                document.querySelector(".box").appendChild(scoreText);
           
     }
}
)
