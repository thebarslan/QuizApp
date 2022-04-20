import React, { useState } from 'react';

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
		},
		{
			questionText: 'Ökaryotik bir hücrede ribozomal RNA (rRNA) aşağıdakilerden hangisinde sentezlenir',
			answerOptions: [
				{ answerText: 'Golgi Cisimciği', isCorrect: false },
				{ answerText: 'Lizozom', isCorrect: false },
				{ answerText: 'Çekirdekçik', isCorrect: true },
				{ answerText: 'Sitoplazma', isCorrect: false },
			],
		},
		{
			questionText: 'Çağrı ab neden yürüyemez?',
			answerOptions: [
				{ answerText: 'UZUN ŞIK DENEMESİ YAPIYORUM BURADA AAAAAAAAAAAAAAAAAAAAAAAAA', isCorrect: false },
				{ answerText: 'HOJAM EVE GİDİCEZ YA', isCorrect: false },
				{ answerText: 'OBAYANA GEL AMK', isCorrect: false },
                    { answerText: 'DAŞAKTAN', isCorrect: true },
			],
		},
	];
     function Deneme(props){
          return(<h5>abcd</h5>);
          
     }
     function DenemeHandler(props){
          const isDeneme = props.isDeneme;
          if(isDeneme == true){
               return(<Deneme/>);
          }
          return(<h5>abc</h5>);
          
     }
     const[currentQuestion , setCurrentQuestion] = useState(0);
     const[showScore , setShowScore] = useState(false);
     const[score, setScore] = useState(0);
     const[info, setInfo] = useState(false);
     const startGame = () => {
          setCurrentQuestion(0);
          setShowScore(false);
          setScore(0);
     }
     const handleAnswerButtonClick = (isCorrect) => {
          if(isCorrect == true){
               setScore(score + 1);
          }
          const nextQuestion = currentQuestion + 1;
          if(nextQuestion < questions.length){
               setCurrentQuestion(nextQuestion);
          }else{
               setShowScore(true);
          }
     }
	return (
		<div className='app'>
			{showScore ? (
                    <>
                    
                    <div className='score-text'>SKORUNUZ</div>
				<div className='score-score'> {score * 10}</div>
                    <button className='score-again' onClick={startGame}>Tekrar Oyna</button>
                    </>
			) : (
				<>
                         <DenemeHandler isDeneme={true} />
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
			)}
		</div>
	);
}