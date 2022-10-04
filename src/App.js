import { useEffect, useState,useMemo } from 'react';
import './App.css';
import QuestionSection from './Components/QuestionSection';
import Timer from './Components/Timer';
import Start from './Components/Start';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [user, setUser] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
      answers: [
        {
          text: "Narmada",
          correct: true,
        },
        {
          text: "Son",
          correct: false,
        },
        {
          text: "Mahanadi",
          correct: false,
        },
        {
          text: "Netravati",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who among the following wrote Sanskrit grammar?",
      answers: [
        {
          text: "Kalidasa",
          correct: false,
        },
        {
          text: "Panini",
          correct: true,
        },
        {
          text: "Charak",
          correct: false,
        },
        {
          text: "Aryabhatt",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The metal whose salts are sensitive to light is?",
      answers: [
        {
          text: "Zinc",
          correct: false,
        },
        {
          text: "Silver",
          correct: true,
        },
        {
          text: "Calcium",
          correct: false,
        },
        {
          text: "Copper",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Patanjali is well known for the compilation of ?",
      answers: [
        {
          text: "Ayurveda",
          correct: false,
        },
        {
          text: "Panchatantra",
          correct: false,
        },
        {
          text: "Kama Sutra",
          correct: false,
        },
        {
          text: "Yoga Sutra",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ]
  const scorePyramid = useMemo(() => 
  [
    { id: 1, score: "$ 100" },
    { id: 2, score: "$ 200" },
    { id: 3, score: "$ 300" },
    { id: 4, score: "$ 1000" },
    { id: 5, score: "$ 2000" },
    { id: 6, score: "$ 4000" },
    { id: 7, score: "$ 8000" },
    { id: 8, score: "$ 16000" },
    { id: 9, score: "$ 32000" },
    { id: 10, score: "$ 64000" },
    { id: 11, score: "$ 125000" },
    { id: 12, score: "$ 250000" },
    { id: 13, score: "$ 500000" },
    { id: 14, score: "$ 1000000" },
  ].reverse(),
  []);

  useEffect(() => {
    questionNumber > 1 && setEarned(scorePyramid.find((m) => m.id === questionNumber - 1).score);
  },[scorePyramid,questionNumber])
  return (
    <div className="App">
      {user ? (<><div className="main">
        {stop ? (<div className='endText'><h1>You Scored: {earned} </h1></div>) :
          (
            <>
            <div className="top">
                <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                </div>
              <div className="bottom"><QuestionSection data={data } setStop={setStop} questionNumber={questionNumber}  setQuestionNumber= {setQuestionNumber} /></div>
              </>
            
          )}
        </div>
        <div className="pyramid">
        <ul className="scoreList">
          <div className='tag'>Score</div>
          {scorePyramid.map((m) => {
            return (
            <li className={questionNumber===m.id? "scoreListItem active":"scoreListItem"}>
              <span className="scoreListItemNum">{m.id}</span>
              <span className="scoreListItemAmount">{m.score} </span>
            </li>
            )
          })}
        </ul>
      </div></>): <Start setUser = { setUser }/>}
    </div>
  );
}

export default App;
