import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import CorrectAns from "../assests/CorrectAnswer.mp3";
import shoe from "../assests/shoe.mp3"
// import timerM from "../assests/timer.mp3"
import WrongAns from "../assests/Wrong.mp3"
export default function QuestionSection({ data, setStop, questionNumber, setQuestionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letPlay] = useSound(shoe);
    const [correctAns] = useSound(CorrectAns);
    const [wrongAns] = useSound(WrongAns);

    useEffect(() => {
        letPlay();
    },[letPlay])

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])
    
    const delay = (duration,callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }
    const handle = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000, () => setClassName(a.correct ? "answer correct" : "answer wrong"));
        delay(6000, () => {
            if (a.correct) {
                correctAns();
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            } else {
                wrongAns();
                delay(1000, () => {
                    setStop(true);
                    
                });
            }
        });
    };
    return (
        <div className='trivia'>
            <div className="question">{question?.question}</div>
            <div className="ans">
                {question?.answers.map((a) => {
                    return(
                        <div className={selectedAnswer===a? className:"answer"} onClick={()=>handle(a)}>{a.text}</div>
                    )
                })}
            </div>
        </div>
    )
}
