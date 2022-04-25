import { faArrowAltCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const QuizContest = () => {
    const [select, setSelect] = useState("")
    const quiz = {
        question: "Is Windows better than Debian/Ubuntu?",
        options: [
            {
                opt: "Yes, Of course!!!"
            },
            {
                opt: "Obviously, no."
            },
            {
                opt: "I think windows is better"
            },
            {
                opt: "Debian/Ubuntu"
            }
        ]
    }
    const handleClick = (option) => {
        setSelect(option);
    }
    return (
        <div>
            <h3 className='p-4'>Hello and welcome to the QUIZ CONTEST!!!</h3>
            <div className='p-3'>
                <h1 className='fs-4 text-center'>{quiz.question}</h1>
                <div className='mt-4'>
                    {
                        quiz.options.map((option, index) => {
                            console.log(option);
                            return (
                                <>
                                    <div onClick={() => handleClick(option.opt)} key={index} role="button" className={`my-2  px-4 py-2 mx-auto bg-success w-75 rounded text- ${select == option.opt && `bg-warning text-secondary`}`}>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;&nbsp;&nbsp; {option.opt}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='my-4 w-75 mx-auto'>
                    <button className='btn btn-primary rounded-pill py-1 px-4 d-block ms-auto'>
                        Next &nbsp; <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizContest;