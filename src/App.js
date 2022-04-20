import React, { useState } from 'react';
import logo from './ankarauni.png';

export default function App() {
     const questions = [
          {
               questionText: 'Nükleik asitlerin monomeri aşağıdakilerden hangisidir?',
               answerOptions: [
                    { answerText: 'Amino asit', isCorrect: false },
                    { answerText: 'Nükleotit', isCorrect: true },
                    { answerText: 'Yağ asidi', isCorrect: false },
                    { answerText: 'Gliserol', isCorrect: false },
               ],
               questionInfo : 'İlk sorunun açıklaması',

          },
          {
               questionText: 'Ökaryotik bir hücrede ribozomal RNA (rRNA) aşağıdakilerden hangisinde sentezlenir',
               answerOptions: [
                    { answerText: 'Golgi Cisimciği', isCorrect: false },
                    { answerText: 'Lizozom', isCorrect: false },
                    { answerText: 'Çekirdekçik', isCorrect: true },
                    { answerText: 'Sitoplazma', isCorrect: false },
               ],
               questionInfo : 'İkinci sorunun açıklaması',
          },
          {
               questionText: 'Çağrı ab neden yürüyemez?',
               answerOptions: [
                    { answerText: 'UZUN ŞIK DENEMESİ YAPIYORUM BURADA AAAAAAAAAAAAAAAAAAAAAAAAA', isCorrect: true },
                    { answerText: 'HOJAM EVE GİDİCEZ YA', isCorrect: false },
                    { answerText: 'OBAYANA GEL AMK', isCorrect: false },
                    { answerText: 'DAŞAKTAN', isCorrect: false },
               ],
               questionInfo : 'Uzun bir text yazıyorum şu anda buraya bakalım fazla uzun olduğunda ne yaşanıcak hadi bakalım öğğ mucize arıyoruz iki kere walkout höğ arjantin lan noluyo lan neee neee messi',
          },
     ];
     
     function GetCorrectQuestionNum(props){
          const found = props.find(x => x.isCorrect === true);
          const correctAnswer = found.answerText;
          return(correctAnswer);
     }
     function QuestionInfo(props) {
          return (
               <>
               <div className="questionInfo">
                    <div className="questionCorrectAnswerText">
                         CEVAP
                    </div>
                    <div className="questionCorrectAnswer">
                         {GetCorrectQuestionNum(questions[currentQuestion].answerOptions)}
                    </div>
                    <div className="questionInfoText">
                         {questions[currentQuestion].questionInfo}
                    </div>
                    <div className="nextQuestion">
                         <button className='nextQstBtn' onClick={nextQuestion}>SIRADAKİ SORU</button>
                    </div>
                    
               </div>
               
               </>

          );
     }
     
     function Question(props) {
          return (<>
               <div className='question-section'>
                    <div className='question-count'>
                         <span>Soru {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
               </div>
               <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption) => <button className='option' onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
               </div>
          </>
          );
     }
     function DenemeHandler(props) {
          const isDeneme = props.isDeneme;
          if (isDeneme == true) {
               return (<QuestionInfo />);
          }else{
               return (<Question />);
          }
          

     }
     const [currentQuestion, setCurrentQuestion] = useState(0);
     const [showScore, setShowScore] = useState(false);
     const [score, setScore] = useState(0);
     const [info, setInfo] = useState(false);
     const startGame = () => {
          setCurrentQuestion(0);
          setShowScore(false);
          setScore(0);
     }
     function nextQuestion(){
          setInfo(false);
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
               setCurrentQuestion(nextQuestion);
          } else {
               setShowScore(true);
          }
     }
     const handleAnswerButtonClick = (isCorrect) => {
          if (isCorrect == true) {
               setScore(score + 1);
          }
          setInfo(true);
          
     }
     return (
          <div className='app'>
               <img className='logo' src={logo}></img>
               {showScore ? (
                    <>
                         <div className='score-text'>SKORUNUZ</div>
                         <div className='score-score'> {score * 10}</div>
                         <button className='score-again' onClick={startGame}>Tekrar Oyna</button>
                    </>
               ) : (
                    <>
                         <DenemeHandler isDeneme={info} />
                    </>
               )}
          </div>
     );
}